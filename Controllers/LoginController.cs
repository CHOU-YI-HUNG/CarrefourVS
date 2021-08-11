using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Project2.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Project2.Validation;
using BC = BCrypt.Net.BCrypt;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly CarrefourContext _carrefourContext;
        private readonly JWTSettings _jwtsettings;

        public LoginController(CarrefourContext carrefourContext, IOptions<JWTSettings> jwtsettings)
        {
            _carrefourContext = carrefourContext;
            _jwtsettings = jwtsettings.Value;
        }
        // GET: api/<LoginController>
        [HttpGet]
        public string Get()
        {
            return "Login";
        }

        // GET api/<LoginController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<LoginController>
        [HttpPost]
        public IActionResult Post([FromBody] User value)
        {
            var user = (_carrefourContext.Users.Where(b => b.Username == value.Username)).SingleOrDefault();
            if (user == null)
            {
                return Ok(new {error= "使用者不存在" });
            }
            bool verified = BC.Verify(value.Password, user.Password);
            if (verified == false)
            {
                return Ok(new {error= "帳號或密碼錯誤" });
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtsettings.SecretKey);
            var tokenDescreiptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] {
                    new Claim("id",user.Id.ToString()),
                      new Claim("username",user.Username),

                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            };
            var Token = tokenHandler.CreateToken(tokenDescreiptor);
            var accessToken = tokenHandler.WriteToken(Token);


            return Ok(new { token = accessToken,username=value.Username,id=user.Id });
        }


    
    }
}
