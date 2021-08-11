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

namespace Project2.Validation
{
    public class TokenManager
    {
        private JwtSecurityTokenHandler tokenHandler;
        private readonly JWTSettings _jwtsettings;
        private byte[] secretkey;
        public TokenManager(IOptions<JWTSettings> jwtsettings)
        {
            tokenHandler = new JwtSecurityTokenHandler();
            _jwtsettings = jwtsettings.Value;
            secretkey = Encoding.ASCII.GetBytes(_jwtsettings.SecretKey);
        }

        public TokenManager()
        {
        }

        public string GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtsettings.SecretKey);
            var tokenDescreiptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] {
                    new Claim(ClaimTypes.Name,user.Username),
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())

                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
            };
            var Token = tokenHandler.CreateToken(tokenDescreiptor);
            var accessToken = tokenHandler.WriteToken(Token);

            return accessToken;
        }

    }
}
