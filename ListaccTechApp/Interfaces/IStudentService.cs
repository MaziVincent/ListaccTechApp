using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Models;
using ListaccTechApp.ViewModels;

namespace ListaccTechApp.Interfaces
{
    public interface IStudentService
    {
        Task<string> CreateStudent(StudentModel std);
        Task<bool> IsStudentExist(string email);
        Task<string> EditStudent(int Id, StudentDto std);
        Task<string> DeactivateStudent (int Id);
        Task<string> ActivateStudent(int Id);
        Task<string> ChangePassword (int Id, string Password);

        void RemoveStudent<T>(T entity) where T:class;
        Task<OnlineStudent> GetStudent(int Id);
        
    }
}