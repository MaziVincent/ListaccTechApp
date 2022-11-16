using ListaccTechApp.Models;
using ListaccTechApp.Services;
using ListaccTechApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ListaccTechApp.Interfaces
{
    public interface ILessonService
    {
        void Add<T>(T entity) where T : class;
        Task<string> UpdateLesson(Lesson topic);
        Task<PagedList<Lesson>> GetAllLessons(SearchPaging props);
        Task<Lesson> GetLesson(int Id);
        Task<string> DeleteLesson(int Id);
        Task<bool> SaveAll();
        Task<bool> IsLessonExist(string name);
        
    }
}