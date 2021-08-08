using Microsoft.AspNetCore.Mvc;
using Project2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BC = BCrypt.Net.BCrypt;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        private readonly CarrefourContext _carrefourContext;

        public LoginController(CarrefourContext carrefourContext)
        {
            _carrefourContext = carrefourContext;
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
        public String Post([FromBody] User value)
        {
            var user = (_carrefourContext.Users.Where(b => b.Username == value.Username)).SingleOrDefault();
            if (user==null)
            {
                return "使用者不存在";
            }
            bool verified = BC.Verify(value.Password, user.Password);
            if (verified == false)
            {
                return "帳號或密碼錯誤";
            }

            return "";
        }

        // PUT api/<LoginController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LoginController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
