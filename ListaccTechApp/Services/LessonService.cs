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

        public Task<string> UpdateLesson(Lesson topic)
        {
            throw new NotImplementedException();
        }

        public async Task<PagedList<Lesson>> GetAllLessons(SearchPaging props)
        {
            IQueryable<Lesson> lessons = Enumerable.Empty<Lesson>().AsQueryable();
            var result = await _db.Lessons!.OrderBy(x => x.Index).ToListAsync();
            lessons = lessons.Concat(result);
            var returned = PagedList<Lesson>.ToPagedList(result, props.PageNumber, props.PageSize);

            return returned;
        }

        public async Task<Lesson> GetLesson(int Id)
        {
            var lesson = await _db.Lessons!.Where(l => l.Id == Id).Include(x => x.Medias)!.ThenInclude(x => x.Media!.ImagePath).FirstOrDefaultAsync();

            return lesson!;

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

       

        public async Task<string> DeleteLesson(int Id)
        {
            var lesson = await _db.Lessons!.SingleOrDefaultAsync(x => x.Id == Id);

            _db.Lessons!.Remove(lesson!);

            return "Deleted";
        }
    }
}
