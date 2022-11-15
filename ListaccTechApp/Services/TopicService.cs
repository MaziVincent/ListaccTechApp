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
    public class TopicService : ITopicService
    {
        private readonly MyDbContext _db;

        public TopicService(MyDbContext db)
        {
            _db = db;
        }
        public  void Add<T>(T entity) where T : class
        {
            _db.Add(entity);
        }

       

        public async Task<PagedList<Topic>> GetAllTopics(SearchPaging props)
        {
            IQueryable<Topic> module = Enumerable.Empty<Topic>().AsQueryable();
            var md = await _db.Topics!.OrderBy(x => x.Id).ToListAsync();
            var result = module.Concat(md).ToList();
            var returned = PagedList<Topic>.ToPagedList(result, props.PageNumber, props.PageSize);
            return returned;
        }

        public async Task<Topic> GetTopic(int Id)
        {
            var topic = await _db.Topics!.Where(t => t.Id == Id).Include(l => l.Lessons).FirstOrDefaultAsync();
            
            return topic!;
        }

       

        public async Task<bool> IsTopicExist(string title)
        {
            var result = await _db.Topics!.AsQueryable().Where(t => t.Title!.CompareTo(title)== 0).AnyAsync();
            
            return result;
        }

        public async Task<bool> SaveAll()
        {
            return await _db.SaveChangesAsync() > 0;
        }

        public async Task<string> UpdateTopic(Topic topicUpdate)
        {
            var topic = await _db.Topics!.Where(t => t.Id == topicUpdate.Id).FirstOrDefaultAsync();
            topic!.Title = topicUpdate.Title;
            topic.Description = topicUpdate.Description;
            topic.ModuleId = topicUpdate.ModuleId;
            topic.Index = topicUpdate.Index;

            await SaveAll();

            return "Updated";


        }

        public async Task<string> DeleteTopic(int Id)
        {
            var topic = await _db.Topics!.FindAsync(Id);
            _db.Topics.Remove(topic!);

            return "Deleted";
        }
    }
}