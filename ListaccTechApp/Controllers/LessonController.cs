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
using static System.Net.Mime.MediaTypeNames;

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

                if(lesson.Images != null)
                    {
                        var lastLesson = await _db.Lessons!.Where(l => l.Title!.CompareTo(newLesson.Title) == 0).FirstOrDefaultAsync();
                        int lastLessonId = lastLesson!.Id;

                        foreach (var id in lesson.Images!)
                        {
                            LessonMedia lm = new()
                            {
                                MediaId = id,
                                LessonId = lastLessonId,

                            };

                        _lService.Add(lm);
                       
                        

                        }
                    await _lService.SaveAll();

                }
           
           
                 return Ok("Created");

           }
           catch(Exception ex){

            return BadRequest(ex);

           }

        }

        [Authorize(Roles ="Admin")]
        [HttpPost("Upload")]
        public async Task<IActionResult> UploadFile([FromForm] MediaModel model)
        {
            string imagePath;

            if (model.Image!.FileName != null || model.Image.FileName!.Length != 0)
            {
                var guid = Guid.NewGuid().ToString();
                imagePath = Path.Combine(_environment.WebRootPath, "images", guid + model.Image.FileName);

                using (FileStream stream = new(imagePath, FileMode.Create))
                {

                    await model.Image.CopyToAsync(stream);
                    stream.Close();
                }

                var media = new Media
                {
                    ImagePath = imagePath,

                };


                _lService.Add(media);
                await _lService.SaveAll();

                var lastMedia = await _db.Medias!.Where(x => x.ImagePath!.CompareTo(imagePath) == 0).FirstOrDefaultAsync();
                int lastMediaId = lastMedia!.Id;
                var data = new
                {
                    MediaId = lastMediaId,
                    imagePath
                };

                return Ok(data);

            }

            return null!;
            






        }


    }
 }
