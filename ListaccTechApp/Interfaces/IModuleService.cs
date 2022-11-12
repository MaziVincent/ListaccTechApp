using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Models;
using ListaccTechApp.Services;
using ListaccTechApp.ViewModels;

namespace ListaccTechApp.Interfaces
{
    public interface IModuleService
    {
        Task<string> CreateModule(Module md);
        Task<string> UpdateModule(ModuleModel md);
        Task<PagedList<Module>> GetAllModules(SearchPaging props);
        Task<Module> GetModule(int Id);
        Task<bool> IsModuleExist(string name);
        void Add<T>(T entity) where T : class;
        Task<bool> SaveAll();
        void Remove<T>(T entity) where T : class;
    }
}