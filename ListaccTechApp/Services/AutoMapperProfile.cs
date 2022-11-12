using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Models;
using ListaccTechApp.ViewModels;
using AutoMapper;

namespace ListaccTechApp.Services
{
    public class AutoMapperProfile : Profile
    {
        
        public AutoMapperProfile()
        {
           //Mapping for Downloads
            CreateMap<User, CurrentUser>();
            CreateMap<User, SearchPaging>();
            CreateMap<User, UserModel>();
            CreateMap<OnlineStudent, StudentDto>();
            CreateMap<LearningPath, LearningPathModel>();
            CreateMap<Module, ModuleModel>();


             // Mapping for Uploads
            CreateMap<ModuleModel,Module>();
            CreateMap<TopicModel, Topic>();
            CreateMap<LessonModel,Lesson>();
        }
        
        
    }
}