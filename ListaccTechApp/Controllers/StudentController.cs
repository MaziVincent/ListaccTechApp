using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Interfaces;
using ListaccTechApp.Models.Data;
using ListaccTechApp.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ListaccTechApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly MyDbContext _context;
        private readonly IStudentService _stdService;
        private readonly IMapper _mapper;
        public StudentController(MyDbContext context, IStudentService stdService, IMapper mapper)
        {
            _context = context;
            _stdService = stdService;
            _mapper = mapper;
        }

        //api/Student/Create
        [HttpPost("Create")]
        public async Task<IActionResult> CreateStudent(StudentModel std){

            if(!ModelState.IsValid){

                return BadRequest();
            }
            if(!await _stdService.IsStudentExist(std.Email!)){

                try{

                  var result =  await _stdService.CreateStudent(std);

                    return Created(result, new { sucess="Student Created Successfully"});
                }
                catch(Exception ex){

                    return BadRequest(ex);
                }


            }

            return BadRequest(new{Error=" Email already Exist"});
        }

        //api/Student/Update/id
        [Authorize]
        [HttpPut("Update/{id}")]
        public async Task<IActionResult> EditStudent(int Id, StudentDto student){

            if(!ModelState.IsValid){

                return BadRequest(new {error = "Invalid Request"});
            }

            try{
                var result = await _stdService.EditStudent(Id , student);

                return Ok(result);
            }
            catch(Exception ex){

                return BadRequest(ex);

            }
        }

        [Authorize]
        [HttpGet("Get/{id}")]
        public async Task<IActionResult> GetStudent(int Id){

            try{
                var student = await _stdService.GetStudent(Id);
                if(student == null ){

                    return NoContent();
                }

                var result = _mapper.Map<StudentDto>(student);

                return Ok(result);

            } catch(Exception ex){

                return BadRequest(ex);
            }
        }

        [Authorize]
        [HttpPut("Activate/{id}")]
        public async Task<IActionResult> ActivateStudent(int Id){

            try{
                var result = await _stdService.ActivateStudent(Id);

                return Ok(result);

            }catch(Exception ex){

                return BadRequest(ex);
            }
        }


        
        [Authorize]
        [HttpPut("Deactivate/{id}")]
        public async Task<IActionResult> DeactivateStudent(int Id){

            try{
                var result = await _stdService.DeactivateStudent(Id);

                return Ok(result);
                
            }catch(Exception ex){

                return BadRequest(ex);
            }
        }

        [Authorize]
        [HttpPut("ChangePassword/{id}")]
        public async Task<IActionResult> ChangePassword(int Id, PasswordModel Password){

            if(!ModelState.IsValid){

                return BadRequest(new {error ="Invalid Request "} );
            }

            try{

                var result = await _stdService.ChangePassword(Id, Password.Password!);

                if(result == null){

                    return BadRequest(new {error = " Something went wrong"});
                }

                return Ok(result);

            } catch(Exception ex){

                return BadRequest(ex);
            }
        }


    }
}