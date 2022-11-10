using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Interfaces;
using ListaccTechApp.Models;
using ListaccTechApp.Models.Data;
using ListaccTechApp.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

namespace ListaccTechApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LessonController : ControllerBase
    {
         private readonly MyDbContext _db;
        private readonly IMapper _mapper;
        private readonly ILessonService _lService;
        private readonly IWebHostEnvironment _environment;

        public LessonController(ILessonService lService, IMapper mapper,
         MyDbContext db, IWebHostEnvironment environment)
        {
            _lService = lService;
            _mapper = mapper;
            _db = db;
            _environment = environment;
        }

        [Authorize(Roles="Admin")]
        [HttpPost("Create")]

        public async Task<IActionResult> CreateLesson([FromForm] LessonModel lesson){
           if(!ModelState.IsValid){

            return BadRequest("Invalid Submission");
           } 

           var newLesson =  _mapper.Map<Lesson>(lesson);
           

           try{

            _lService.Add(newLesson);
           await _lService.SaveAll();
           var lastLesson = await _db.Lessons!.Where(l => l.Title.CompareTo(newLesson.Title) == 0).FirstOrDefaultAsync();
           int lastLessonId = lastLesson!.Id;

           foreach(var image in lesson.Images!){

            if(image.FileName == null || image.FileName.Length == 0){

                return Content(" File not Selected");
            }

            var guid = Guid.NewGuid().ToString();
            var path = Path.Combine(_environment.WebRootPath,"images",guid + image.FileName);

            using(FileStream stream = new FileStream(path, FileMode.Create)){

                await image.CopyToAsync(stream);
                stream.Close();
            }
            var media = new Media{
                ImagePath = path,
                LessonId = lastLessonId
            };
            _lService.Add(media);
            await _lService.SaveAll();
           }
           
           return Ok("Created");

           }
           catch(Exception ex){

            return BadRequest(ex);

           }

        }
    }
}