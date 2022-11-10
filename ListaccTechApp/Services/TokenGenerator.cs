using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Interfaces;
using ListaccTechApp.Models.Data;
using ListaccTechApp.ViewModels;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace ListaccTechApp.Services
{
    public class TokenGenerator : ITokenGenerator
    {
        private readonly IConfiguration _config;
        private readonly MyDbContext _context;

        public TokenGenerator(IConfiguration config, MyDbContext context)
        {
            _config = config;
            _context = context;
        }
        public async Task<string> GenerateToken(UserLogin login, int Id, string type){

            var tokenClaims = new List<Claim> {};
            tokenClaims.Add(new Claim("UserID", Id.ToString()));
            tokenClaims.Add(new Claim("Email", login.EmailAddress!));
            tokenClaims.Add(new Claim(ClaimTypes.Role, type));

            var keyByte = Encoding.UTF8.GetBytes(_config.GetSection("Tokens:Key").Value!);
            var key = new SymmetricSecurityKey(keyByte);
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor{
                Subject = new ClaimsIdentity(tokenClaims),
                SigningCredentials = credentials,
                Expires = DateTime.Now.AddDays(7)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token =  tokenHandler.CreateToken(tokenDescriptor);
            var tokenString =  tokenHandler.WriteToken(token);

            return tokenString;

            

            
        }
    }
}