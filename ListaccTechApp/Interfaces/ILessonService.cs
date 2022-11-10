using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ListaccTechApp.Interfaces
{
    public interface ILessonService
    {
        void Add<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<bool> IsLessonExist(string name);
        
    }
}