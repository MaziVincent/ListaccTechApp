
using ListaccTechApp.Interfaces;
using ListaccTechApp.Models.Data;
using ListaccTechApp.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace ListaccTechApp.Services
{
    public class OtherServices : IOtherServices, IDisposable
    {
        public readonly MyDbContext _db;

        public OtherServices(MyDbContext db)
        {
            _db = db;
        }
        public string Strip(string type){

            var retype = type.Substring(type.LastIndexOf('.') + 1);
            return retype;
        }

        public async Task<DataModel> GetData(){

            DataModel dataModel = new DataModel();
            dataModel.AdminCount = await _db.Admins!.CountAsync();
            dataModel.StudentCount = await _db.OnlineStudents!.CountAsync();
            dataModel.LearningPathCount = await _db.LearningPaths!.CountAsync();
            dataModel.ModuleCount = await _db.Modules!.CountAsync();
            dataModel.TopicCount = await _db.Topics!.CountAsync();
            dataModel.LessonCount = await _db.Lessons!.CountAsync();

            return dataModel;

            
        }

           
       private bool disposed = false;

    protected virtual void Dispose(bool disposing)
    {
        if (!this.disposed)
        {
            if (disposing)
            {
                _db.Dispose();
               
            }
        }
        this.disposed = true;
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }
    }
}