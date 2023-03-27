using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Models;
using ListaccTechApp.Services;
using ListaccTechApp.ViewModels;

namespace ListaccTechApp.Interfaces
{
    public interface ITopicService
    {
        void Add<T>(T entity) where T : class;

        Task<string> UpdateTopic(Topic topic);
        Task<PagedList<Topic>> GetAllTopics(SearchPaging props);
        Task<Topic> GetTopic(int Id);
        Task<bool> SaveAll();
        Task<string> DeleteTopic(int Id);
        Task<bool> IsTopicExist(string name);
    }
}