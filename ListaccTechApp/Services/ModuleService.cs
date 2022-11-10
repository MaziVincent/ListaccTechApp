using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Interfaces;
using ListaccTechApp.Models;
using ListaccTechApp.Models.Data;
using ListaccTechApp.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace ListaccTechApp.Services
{
    public class ModuleService : IModuleService
    {
        private readonly MyDbContext _db;

        public ModuleService(MyDbContext db)
        {
            _db = db;
        }
        public async Task<string> CreateModule(Module md)
        {
           
            
            await _db.Modules!.AddAsync(md);

            return "Created";
           

           // _db.Modules.Add(newModule);

            
           
        }

        public void Add<T>(T entity) where T : class{

            _db.Add(entity);
        }
        public async Task<bool> SaveAll(){

            return await _db.SaveChangesAsync() > 0;
        }
        public async Task<bool> IsModuleExist(string name)
        {
           var module = await _db.Modules!.AsQueryable()
                        .Where(m => m.Name!.ToUpper().CompareTo(name.ToUpper())==0).AnyAsync();
           return module;
        }
    }
}