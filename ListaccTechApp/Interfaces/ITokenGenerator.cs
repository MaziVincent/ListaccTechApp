using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using ListaccTechApp.ViewModels;

namespace ListaccTechApp.Interfaces
{
    public interface ITokenGenerator
    {
        Task<AuthResult> GenerateToken(string Email, int Id, string type);
        string GenerateRefreshToken();
        ClaimsPrincipal? GetClaimsPrincipal(string token);
    }
}