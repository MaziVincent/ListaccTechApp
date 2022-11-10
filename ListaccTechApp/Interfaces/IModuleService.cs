using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Models;
using ListaccTechApp.ViewModels;

namespace ListaccTechApp.Interfaces
{
    public interface IModuleService
    {
        Task<string> CreateModule(Module md);
        Task<bool> IsModuleExist(string name);
        void Add<T>(T entity) where T : class;
        Task<bool> SaveAll();
    }
}