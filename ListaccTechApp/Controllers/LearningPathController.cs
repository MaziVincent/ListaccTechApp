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

namespace ListaccTechApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LearningPathController : ControllerBase
    {
        private readonly MyDbContext _db;
        private readonly ILearningPathService _lpService;
        private readonly IMapper _mapper;

        public LearningPathController(MyDbContext db, ILearningPathService lpService, IMapper mapper)
        {
            _db = db;
            _lpService = lpService;
            _mapper = mapper;
        }
        [Authorize(Roles ="Admin")]
        [HttpPost("Create")]
        public async Task<IActionResult> CreateLearningPath(LearningPathModel lp){

            if(!ModelState.IsValid){

                return BadRequest();
            }

            if(!await _lpService.IsLearningPathExist(lp.Name!)){

               var result = await _lpService.CreateLearningPath(lp);
                
                return Ok(result);


            }

            return BadRequest(new {Error = "Learning Path Already Exist"});
        }

        [Authorize]
        [HttpGet("Get/{id}")]
        public async Task<IActionResult> GetLearningPath(int Id){
            if(Id == 0){
                return BadRequest();
            }

            try{
                var result = await _lpService.GetLearningPath(Id);

                if(result == null){
                    return NotFound(new {error = "Learning Path Not Found"});
                }

                return Ok(result);
            }catch(Exception ex){

                return BadRequest(ex);
            }
        }

        [Authorize("Admin")]
        [HttpPut("Update")]
        public async Task<IActionResult> EditLearningPath(int id, LearningPathModel lp){

            if(!ModelState.IsValid){

                return BadRequest();
            }

            try{
                var learningPath = _mapper.Map<LearningPath>(lp);
                var result = await _lpService.EditLearningPath(learningPath);
                return Ok(result);
            }
            catch(Exception ex){

                return BadRequest(ex);
            }
        }
        [Authorize(Roles ="Admin")]
        [HttpDelete("Delete")]
        public async Task<IActionResult> RemoveLearningPath(LearningPath lp){

            if(!ModelState.IsValid){
                return BadRequest();
            }

             _lpService.Remove(lp);
             
             return Ok();




        }
    }
}