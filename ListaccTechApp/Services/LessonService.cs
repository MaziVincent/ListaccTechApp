using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Interfaces;
using ListaccTechApp.Models.Data;
using Microsoft.EntityFrameworkCore;

namespace ListaccTechApp.Services
{
    public class LessonService : ILessonService
    {
        
        private readonly MyDbContext _db;

        public LessonService(MyDbContext db)
        {
            _db = db;
        }
        public  void Add<T>(T entity) where T : class
        {
            _db.Add(entity);
        }

        public async Task<bool> IsLessonExist(string title)
        {
            var result = await _db.Lessons!.AsQueryable().Where(t => t.Title!.CompareTo(title)== 0).AnyAsync();
            
            return result;
        }

        public async Task<bool> SaveAll()
        {
            return await _db.SaveChangesAsync() > 0;
        }
    }
}
