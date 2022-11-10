using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.ViewModels;

namespace ListaccTechApp.Interfaces
{
    public interface ITokenGenerator
    {
        Task<string> GenerateToken(UserLogin login, int Id, string type);
    }
}