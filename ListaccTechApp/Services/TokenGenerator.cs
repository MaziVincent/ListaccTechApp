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
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ListaccTechApp.Models;

namespace ListaccTechApp.Services
{
    public class TokenGenerator : ITokenGenerator
    {
        private readonly IConfiguration _config;
        private readonly MyDbContext _context;
        private readonly TokenValidationParameters _tokenValidationParameters;

        public TokenGenerator(IConfiguration config, MyDbContext context, TokenValidationParameters tokenValidationParameters)
        {
            _config = config;
            _context = context;
            _tokenValidationParameters = tokenValidationParameters;
            
        }

        public async Task<AuthResult> GenerateToken(string Email, int Id, string type){

            var tokenClaims = new List<Claim> {};
            tokenClaims.Add(new Claim("UserID", Id.ToString()));
            tokenClaims.Add(new Claim("Email", Email!));
            tokenClaims.Add(new Claim(ClaimTypes.Email, Email!));
            tokenClaims.Add(new Claim(ClaimTypes.Name, Email!));
            tokenClaims.Add(new Claim(ClaimTypes.Role, type));

            var keyByte = Encoding.UTF8.GetBytes(_config.GetSection("Tokens:Key").Value!);
            var key = new SymmetricSecurityKey(keyByte);
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor{
                Subject = new ClaimsIdentity(tokenClaims),
                SigningCredentials = credentials,
                Expires = DateTime.Now.AddDays(1)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token =  tokenHandler.CreateToken(tokenDescriptor);
            var tokenString =  tokenHandler.WriteToken(token);
            
            var newToken = new AuthResult()
            {
                TokenString = tokenString,
                Expire_At = token.ValidTo,
                Jwt_Id = token.Id
            };

            return newToken;

            

            
        }

        public string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            
           using (var rng = System.Security.Cryptography.RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }


        public ClaimsPrincipal? GetClaimsPrincipal(string token) {

            var tokenHandler = new JwtSecurityTokenHandler();
            var principal = tokenHandler.ValidateToken(token, _tokenValidationParameters, out SecurityToken securityToken);
            if (securityToken is not JwtSecurityToken jwtSecurityToken || !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha512, StringComparison.InvariantCultureIgnoreCase)) {
                throw new SecurityTokenException("Invalid token");

            }

            return principal;
        }
    }
}