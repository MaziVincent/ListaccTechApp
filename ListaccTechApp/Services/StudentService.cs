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
    public class StudentService : IStudentService
    {
        private readonly MyDbContext _context;
        public StudentService(MyDbContext context)
        {
            _context = context;
            
        }

       
        public async Task<string> CreateStudent(StudentModel std)
        {
            var newStudent = new OnlineStudent();

            newStudent.FirstName = std.FirstName!;
            newStudent.LastName = std.LastName!;
            newStudent.Email = std.Email;
            newStudent.Gender = std.Gender!;
            newStudent.PhoneNumber = std.PhoneNumber;
            newStudent.Status = true;
            newStudent.DateOfBirth = std.DateOfBirth;
            newStudent.DateRegistered = DateTime.UtcNow;
            var message = std.Password!.ToLower();
            var salt = Salt.Create();
            var hash = Hash.Create(message, salt);
            newStudent.PasswordHash = hash;
            newStudent.salt = salt;
            newStudent.SearchString = (newStudent.LastName + " " + newStudent.FirstName + " " + newStudent.Email + " " 
            + newStudent.Gender + " " + newStudent.PhoneNumber + " " + newStudent.Status + " " + newStudent.DateRegistered +
            " " + newStudent.DateOfBirth + " " + "OnlineStudent" + "Active").ToUpper();

            await _context.OnlineStudents!.AddAsync(newStudent);
            await _context.SaveChangesAsync();

            return "Student Created";
        }
  

        public async Task<string> EditStudent(int Id, StudentDto std)
        {
            var student = await _context.OnlineStudents!.Where( s => s.Id == Id).FirstOrDefaultAsync();
           
            student!.FirstName = std.FirstName;
            student.LastName = std.LastName;
            student.Email = std.Email;
            student.Gender = std.Gender;
            student.PhoneNumber = std.PhoneNumber;
            student.Status = true;
            student.SearchString = (std.LastName + " " + std.FirstName + " " + std.Email + " " 
            + std.Gender + " " + std.PhoneNumber + " " + student.Status + " " + student.DateRegistered +
            " " + student.DateOfBirth + " " + "OnlineStudent" + "Active").ToUpper();

            await _context.SaveChangesAsync();

            return "Student Updated";


        }
         public async Task<string> ActivateStudent(int Id)
        {
            var student = await _context.OnlineStudents!.Where(u => u.Id == Id).FirstOrDefaultAsync();

            student!.Status = true;
            student.SearchString = (student.LastName + " " + student.FirstName + " " + student.Email + " " + student.Gender + " " + student.PhoneNumber + " " + student.Status + " " + "Administrator" + "InActive").ToUpper();
            await _context.SaveChangesAsync();

            return "Activated";
        }

        public async Task<OnlineStudent> GetStudent(int Id){

            var student = await _context.OnlineStudents!.Where(s => s.Id == Id).FirstOrDefaultAsync();
            
            return student!;
        }
         public async Task<string> DeactivateStudent(int Id)
        {
              var student = await _context.OnlineStudents!.Where(u => u.Id == Id).FirstOrDefaultAsync();

            student!.Status = false;
            student.SearchString = (student.LastName + " " + student.FirstName + " " + student.Email + " " + student.Gender + " " + student.PhoneNumber + " " + student.Status + " " + "Administrator" + "InActive").ToUpper();
            await _context.SaveChangesAsync();

            return "Deactivated";
        }

        public async Task<string> ChangePassword(int Id, string Password)
        {
            var user = await _context.OnlineStudents!.Where( u => u.Id == Id).FirstOrDefaultAsync();
             
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

       
        public async Task<bool> IsStudentExist(string email)
        {
           var u = await _context.OnlineStudents!.Where(x => x.Email.ToUpper().CompareTo(email.ToUpper())==0).FirstOrDefaultAsync();

           if(u is null){

            return false;
           }
           return true;
        }

         public void RemoveStudent<T>(T entity) where T : class
        {
            _context.Remove(entity);
            
        }

       
    }
}