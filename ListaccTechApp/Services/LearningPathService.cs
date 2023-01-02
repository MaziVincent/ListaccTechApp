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
    public class LearningPathService : ILearningPathService
    {
        private readonly MyDbContext _context;

        public LearningPathService(MyDbContext context)
        {
            _context = context;
        }
        public async Task<string> CreateLearningPath(LearningPathModel lp)
        {
            LearningPath newLp = new LearningPath();

            newLp.Name = lp.Name!;
            newLp.Description = lp.Description!;


            string imagePath;

            if (lp.LearningPathAvatar!.FileName != null || lp.LearningPathAvatar.FileName!.Length != 0)
            {
                var guid = Guid.NewGuid().ToString();
                string fileName = lp.LearningPathAvatar.FileName.Trim();
                imagePath = Path.Combine("wwwroot", "images" + guid + fileName);

                using (FileStream stream = new(imagePath, FileMode.Create))
                {

                    await lp.LearningPathAvatar.CopyToAsync(stream);
                    stream.Close();
                }

                newLp.ImagePath = imagePath;

            }

           

            await _context.LearningPaths!.AddAsync(newLp);

            await _context.SaveChangesAsync();

            return "Created";


        }

        public async Task<string> EditLearningPath(LearningPath lp)
        {
            var learningPath = await _context.LearningPaths!.Where(l => l.Id == lp.Id).FirstOrDefaultAsync();
            learningPath!.Name = lp.Name;
            learningPath.Description = lp.Description;
            await _context.SaveChangesAsync();

            return "Edited";
        }

        public async Task<PagedList<LearningPath>> GetAllLearningPath(SearchPaging props)
        {
            IQueryable<LearningPath> learningPaths = Enumerable.Empty<LearningPath>().AsQueryable();

            var lp = await _context.LearningPaths!.OrderBy(x => x.Id).ToListAsync(); 
            var result = learningPaths.Concat(lp).ToList();
            var returned = PagedList<LearningPath>.ToPagedList(result, props.PageNumber, props.PageSize);
            
            return returned;
        }

        // public async Task<List<LearningPathModule>> GetLearningPaths(int Id)
        // {
        //     var learningPath = await _context.LearningPathModules!
        //                         .Where(lp => lp.LearningPathId == Id)
        //                         .Include(lp=>lp.LearningPath)
        //                         .Include(lp => lp.Module).ToListAsync();

        //     return learningPath!;
        // }

         public async Task<LearningPath> GetLearningPath(int Id)
        {
            var learningPath = await _context.LearningPaths!
                                .Where(lp => lp.Id == Id)
                                .Include(lp=>lp.LearningPathModules!)
                                .ThenInclude(lp => lp.Module)
                                .FirstOrDefaultAsync();

            return learningPath!;
        }



        public async Task<bool> IsLearningPathExist(string name)
        {
            var lp = await _context.LearningPaths!.Where(l => l.Name!.ToUpper().CompareTo(name.ToUpper()) == 0).FirstOrDefaultAsync();

            if(lp == null){
                
                return false;
            }

            return true;
        }

        public async void Remove<T>( T entity) where T : class{
             _context.Remove(entity);
             await _context.SaveChangesAsync();

        }
    }
}