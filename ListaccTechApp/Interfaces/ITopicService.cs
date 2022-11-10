using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.ViewModels;

namespace ListaccTechApp.Interfaces
{
    public interface ITopicService
    {
        void Add<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<bool> IsTopicExist(string name);
    }
}