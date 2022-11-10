using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Models;
using ListaccTechApp.Services;
using ListaccTechApp.ViewModels;

namespace ListaccTechApp.Interfaces
{
    public interface IUserService
    {
        Task<string> CreateUser(UserDto user);
        Task<PagedList<User>> ReturnUsers(SearchPaging props);
        Task<PagedList<User>> ReturnAllUsers(SearchPaging props);
        Task<User> GetUser(int Id);
        Task<bool> IsUserExist(string email);
        void RemoveUser<T>(T entity) where T : class;
        Task<string> EditUser(int Id, UserModel user);
        Task<string> DeactivateUser(int id);
        Task<string> ActivateUser(int id);
        Task<string> ChangePassword (int Id, string Password);

    }
}