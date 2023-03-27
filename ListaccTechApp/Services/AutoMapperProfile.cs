using AutoMapper;
using ListaccTechApp.Models;
using ListaccTechApp.ViewModels;

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
            CreateMap<Topic, TopicModel>();
            CreateMap<Lesson, LessonModel>();


            // Mapping for Uploads
            CreateMap<ModuleModel, Module>();
            CreateMap<TopicModel, Topic>();
            CreateMap<LessonModel, Lesson>();
        }


    }
}