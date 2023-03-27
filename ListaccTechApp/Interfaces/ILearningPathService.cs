using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Models;
using ListaccTechApp.Services;
using ListaccTechApp.ViewModels;

namespace ListaccTechApp.Interfaces
{
    public interface ILearningPathService
    {
        Task<string> CreateLearningPath(LearningPathModel lp);
        Task<bool> IsLearningPathExist(string name);
        Task<string> EditLearningPath (LearningPath lp);
        
       // Task<List<LearningPathModule>> GetLearningPaths (int Id);
        Task<LearningPath> GetLearningPath (int Id);
        Task<PagedList<LearningPath>> GetAllLearningPath(SearchPaging props);

        void Remove<T>(T entity) where T : class;
        
    }
}