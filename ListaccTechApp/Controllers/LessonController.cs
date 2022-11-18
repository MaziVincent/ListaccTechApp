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

        [Authorize(Roles = "Admin")]
        [HttpPost("Create")]

        public async Task<IActionResult> CreateLesson( LessonModel lesson)
        {
            if (!ModelState.IsValid)
            {

                return BadRequest("Invalid Submission");
            }

            var newLesson = new Lesson()
            {
                Title = lesson.Title,
                SubTitle = lesson.SubTitle,
                Body = lesson.Body,
                Index = lesson.Index,
                TopicId = lesson.TopicId,

            };


            try
            {

                _lService.Add(newLesson);

                await _lService.SaveAll();
                

                if (lesson.Medias!.Count != 0)
                {
                    var lastLesson = await _db.Lessons!.Where(l => l.Title!.CompareTo(newLesson.Title) == 0).FirstOrDefaultAsync();
                    int lastLessonId = lastLesson!.Id;

                    foreach (var m in lesson.Medias!)
                    {
                        LessonMedia lm = new()
                        {
                            MediaId = m.Id,
                            LessonId = lastLessonId,

                        };

                        _lService.Add(lm);



                    }
                   

                }

                await _lService.SaveAll();


                return Ok("Created");

            }
            catch (Exception ex)
            {

                return BadRequest(ex);

            }

        }

        [Authorize(Roles ="Admin")]
        [HttpPost("Update/{id}")]
        public async Task<IActionResult> UpdateLesson(int Id, LessonModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
               // var lesson = _mapper.Map<Lesson>(model);

                var result = await _lService.UpdateLesson(Id, model);

                return Ok(result);

            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("Upload")]
        public async Task<IActionResult> UploadFile([FromForm] MediaModel model)
        {
            string imagePath;

            if (model.Image!.FileName != null || model.Image.FileName!.Length != 0)
            {
                var guid = Guid.NewGuid().ToString();
                string fileName = model.Image.FileName.Trim();
                imagePath = Path.Combine("wwwroot", "images" + guid + fileName);

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

        [Authorize]
        [HttpGet("Get/{id}")]
        public async Task<IActionResult> GetLesson(int Id)
        {
            if (Id != 0)
            {
                try
                {
                    var result = await _lService.GetLesson(Id);

                    if (result is null)
                    {
                        return NotFound(new { error = "Lesson does not exist" });
                    }

                    return Ok(result);

                }
                catch (Exception ex)
                {

                    return BadRequest(ex.Message);
                }

            }
            return BadRequest();
        }

        [Authorize]
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAllLessons(SearchPaging props)
        {
            try
            {
                var lessons = await _lService.GetAllLessons(props);
                var returned = _mapper.Map<List<Lesson>>(lessons);

                var dataList = new
                {
                    lessons.PageSize,
                    lessons.CurrentPage,
                    lessons.TotalCount,
                    lessons.TotalPages,
                    lessons.HasPrevious,
                    lessons.HasNext
                };

                var data = new
                {
                    returned,
                    dataList
                };
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }
    }
}
