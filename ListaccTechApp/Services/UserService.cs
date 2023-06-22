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
    public class UserService : IUserService
    {
        private readonly MyDbContext _context;
        
        
        public UserService(MyDbContext context)
        {
            _context = context;
        }
        public async Task<string> CreateUser(UserDto user){

            var newAdmin = new Admin();
            newAdmin.FirstName = user.FirstName!;
            newAdmin.LastName = user.LastName!;
            newAdmin.Email = user.Email;
            newAdmin.Gender = user.Gender!;
            newAdmin.PhoneNumber = user.PhoneNumber;
            newAdmin.UserName = user.Email;
            newAdmin.Status = true;

            //Password Hash
            //
            var message = user.Password!.ToLower();
            var salt = Salt.Create();
            var hash = Hash.Create(message,salt);
            newAdmin.PasswordHash = hash;
            newAdmin.salt = salt;

            //Search Parameters
            newAdmin.SearchString = (newAdmin.LastName + " " + newAdmin.FirstName + " " + newAdmin.Email + " " + newAdmin.Gender + " " + newAdmin.PhoneNumber + " " + newAdmin.Status + " " + "Administrator" + "Active").ToUpper();
            //add and save changes
            await _context.Admins!.AddAsync(newAdmin);
            await _context.SaveChangesAsync();

            return "Created";
           
            
        }

        public async Task<string> EditUser(int Id, UserModel user)
        {
            // Getting user from the db
            var u = await _context.Admins!.Where(u => u.Id == Id).FirstOrDefaultAsync();
            
            u!.FirstName = user.FirstName;
            u.LastName = user.LastName;
            u.Email = user.Email;
            u.Gender = user.Gender;
            u.PhoneNumber = user.PhoneNumber;
            u.Status = true;
            //Search Parameters
            u.SearchString = (user.LastName + " " + user.FirstName + " " + user.Email + " " + user.Gender + " " + user.PhoneNumber + " " + user.Status + " " + "Administrator" + "Active").ToUpper();
            //add and save changes
            await _context.SaveChangesAsync();

            return "Updated";
       
        }

        //when there is search string
        public async Task<PagedList<User>> ReturnUsers(SearchPaging props){

            var returned = (await SearchUser(props)).OrderBy(x => x.Id).ToList();
            var result = PagedList<User>.ToPagedList(returned, props.PageNumber, props.PageSize);
            return result;

        }
          public async Task<IQueryable<User>> SearchUser(SearchPaging props)
        {
            IQueryable<User> users = Enumerable.Empty<User>().AsQueryable();

            for(int i = 0; i < props.Role!.Length;i++){

                switch(props.Role[i]){

                    case "Admin":
                    var admins = await _context.Admins!.Where(x => x.SearchString!.Contains(props.SearchString!.ToUpper())).ToListAsync();
                    users = users.Concat(admins);
                    break;

                    case "OnlineStudent":
                    var std = await _context.OnlineStudents!.Where(x => x.SearchString!.Contains(props.SearchString!.ToUpper())).ToListAsync();
                    users = users.Concat(std);
                    break;

                    default:
                    var u = await _context.Users.Where(x => x.SearchString!.Contains(props.SearchString!.ToUpper())).ToListAsync();
                    users = users.Concat(u);
                    break;

                }
            }

            return users;
        }

        //when search string is empty
        public async Task<PagedList<User>> ReturnAllUsers(SearchPaging props)
        {
            IQueryable<User> users = Enumerable.Empty<User>().AsQueryable();
            for(int i =0; i < props.Role!.Length ; i++){

                switch(props.Role[i]){

                    case "Admin" :
                    var admins = await _context.Admins!.OrderBy(x => x.Id).ToListAsync();
                    users = users.Concat(admins);
                    break;

                    case "OnlineStudent" :
                    var students = await _context.OnlineStudents!.OrderBy(x => x.Id).ToListAsync();
                    users = users.Concat(students);
                    break;

                    default:
                    var u =await _context.Users.OrderBy(x => x.Id).ToListAsync();
                    users =users.Concat(u);
                    break;
                }

            }

            var returned = users.ToList();
            var result = PagedList<User>.ToPagedList(returned, props.PageNumber, props.PageSize);

            return result;
        }

      

        public async Task<User> GetUser(int Id)
        {
            var user = await _context.Admins!.Where(a => a.Id == Id).FirstOrDefaultAsync();

            return user!;
        }

        public async Task<bool> IsUserExist(string email)
        {
           var u = await _context.Users.Where(x => x.Email!.ToUpper().CompareTo(email.ToUpper())==0).FirstOrDefaultAsync();

           if(u is null){

            return false;
           }
           return true;
        }

        public void RemoveUser<T>(T entity) where T : class
        {
            _context.Remove(entity);
            
        }

        public async Task<string> DeactivateUser(int Id)
        {
            var user = await _context.Admins!.Where(u => u.Id == Id).FirstOrDefaultAsync();

            user!.Status = false;
            user.SearchString = (user.LastName + " " + user.FirstName + " " + user.Email + " " + user.Gender + " " + user.PhoneNumber + " " + user.Status + " " + "Administrator" + "InActive").ToUpper();
            await _context.SaveChangesAsync();

            return "Deactivated";


        }

        public async Task<string> ActivateUser(int Id)
        {
          var user = await _context.Admins!.Where(u => u.Id == Id).FirstOrDefaultAsync();
            
            user!.Status = true;
            user.SearchString = (user.LastName + " " + user.FirstName + " " + user.Email + " " + user.Gender + " " + user.PhoneNumber + " " + user.Status + " " + "Administrator" + "Active").ToUpper();
            await _context.SaveChangesAsync();

            return "Activated";
        }


        public async Task<string> ChangePassword(int Id, string Password){

            var user = await _context.Admins!.Where( u => u.Id == Id).FirstOrDefaultAsync();
             
            var salt = Salt.Create();
            var hash = Hash.Create(Password.ToLower(),salt);
            user!.PasswordHash = hash;
            user.salt = salt;

            //Search Parameters
            user.SearchString = (user.LastName + " " + user.FirstName + " " + user.Email + " " + user.Gender + " " + user.PhoneNumber + " " + user.Status + " " + "Administrator" + "Active").ToUpper();
            //save changes
            
            await _context.SaveChangesAsync();

            return "Password Changed";
        }
    }
}