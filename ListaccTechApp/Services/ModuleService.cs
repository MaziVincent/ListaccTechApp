using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Interfaces;
using ListaccTechApp.Models;
using ListaccTechApp.Models.Data;
using ListaccTechApp.ViewModels;
using Microsoft.AspNetCore.Mvc.ModelBinding;
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

        public async Task<string> UpdateModule(ModuleModel md)
        {
           var module = await _db.Modules!.Where(m => m.Id == md.Id).FirstOrDefaultAsync();
            module!.Name = md.Name;
            module.Description = md.Description;

            foreach(var l in md.LearningPaths!)
            {
                LearningPathModule lpModule = new()
                {
                    LearningPath = l,
                    Module = module
                };
                await _db.AddAsync(lpModule);



            }

            await SaveAll();

            return "Updated";

            

        }

        public async Task<PagedList<Module>> GetAllModules(SearchPaging props)
        {
            IQueryable<Module> module = Enumerable.Empty<Module>().AsQueryable();
            var md = await _db.Modules!.OrderBy(x => x.Id).ToListAsync();
            var result = module.Concat(md).ToList();
            var returned = PagedList<Module>.ToPagedList(result, props.PageNumber, props.PageSize);
            return returned;


        }

        public async Task<Module> GetModule(int Id)
        {
            var module = await _db.Modules!.Where(m => m.Id == Id).Include(m => m.Topics).FirstOrDefaultAsync();

            return module!;

        }

        public async void Remove<T>(T entity) where T : class
        {
            _db.Remove(entity);
            await _db.SaveChangesAsync();

        }
    }
}