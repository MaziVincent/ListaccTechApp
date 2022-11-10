using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Interfaces;
using ListaccTechApp.Models;
using ListaccTechApp.Models.Data;
using ListaccTechApp.Services;
using ListaccTechApp.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ListaccTechApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly MyDbContext _context;
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

     
        public UserController(ILogger<UserController> logger, MyDbContext context, 
                                IUserService userService, IMapper mapper)
        {
            _logger = logger;
            _context = context;
            _userService = userService;
            _mapper = mapper;
        }
        //ListaccTechApp/user/CreateUser
    
        [HttpPost("Create")]
        public async Task<IActionResult> Register(UserDto user)
        {
            if(!ModelState.IsValid){

                return BadRequest();
            }
            if(!await _userService.IsUserExist(user.Email!)){

                 try{

                await _userService.CreateUser(user);
                return Ok();
            }
            catch(Exception ex){

                return BadRequest(ex);
            }

            }

            return BadRequest(new {EmailAddress = "User Already Exist"}); 
           
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("GetUsers")]
        public async Task<IActionResult> ReturnUsers([FromQuery]SearchPaging props){

            if(props == null){

                return BadRequest(new {error = "Invalid model"});
            }

            if(props.SearchString == null){

                var userList = await _userService.ReturnAllUsers(props);
                var returnedList = _mapper.Map<List<CurrentUser>>(userList);

                for (int i =0; i < returnedList.Count; i++)
                {
                        returnedList.ElementAt(i).Role = userList.ElementAt(i).GetType().Name;

                }

                var data = new {
                    userList.TotalCount,
                    userList.PageSize,
                    userList.CurrentPage,
                    userList.TotalPages,
                    userList.HasNext,
                    userList.HasPrevious,

                };

                var user = new {
                    returnedList,
                    data
                };

                return Ok(user);
                
            }else{
                var userList = await _userService.ReturnUsers(props);
                var returnedList = _mapper.Map<List<CurrentUser>>(userList);

                for (int i =0; i < returnedList.Count; i++)
                {
                        returnedList.ElementAt(i).Role = userList.ElementAt(i).GetType().Name;

                }

                var data = new {
                    userList.TotalCount,
                    userList.PageSize,
                    userList.CurrentPage,
                    userList.TotalPages,
                    userList.HasNext,
                    userList.HasPrevious,

                };

                var user = new {
                    returnedList,
                    data
                };

                return Ok(user);
            }
        }

        [Authorize(Roles ="Admin")]
        [HttpGet("GetUser/{id}")]
        public async Task<IActionResult> GetUser(int id){

            if(id == 0){

                return BadRequest(new {error = "Invalid Id"});
            }

            var user = await _userService.GetUser(id);
            if(user == null){

                return NotFound(new { error = "User does not exist"}); 
            }

            var result = _mapper.Map<UserModel>(user);

            return Ok(result);
        }

        [Authorize(Roles ="Admin")]
        [HttpPut("Update/{id}")]
        public async Task<IActionResult> EditUser(UserModel user, int Id){
            if(!ModelState.IsValid){

                return BadRequest(new {error = " Invalid Data"});

            }
            try{
                var result = await _userService.EditUser(Id, user);
                return Ok(result);
            }
            catch(Exception ex){
                return BadRequest(ex);
            }
            

        }

         [Authorize(Roles ="Admin")]
        [HttpPost("Activate/{id}")]
        public async Task<IActionResult> ActivateUser(int Id){
            
            try{
                var result = await _userService.ActivateUser(Id);
                if(result != "Activated"){
                    return BadRequest();
                }

                    return Ok(result);
                
                
            }
            catch(Exception ex){
                return BadRequest(ex);
            }
            

        }

        [Authorize(Roles ="Admin")]
        [HttpPost("Deactivate/{id}")]
        public async Task<IActionResult> DeactivateUser(int Id){
            
            try{
                var result = await _userService.DeactivateUser(Id);
                if(result != "Deactivated"){
                    return BadRequest();
                }

                    return Ok(result);
                           
            }
            catch(Exception ex){
                return BadRequest(ex);
            }
            

        }

        
        [Authorize(Roles ="Admin")]
        [HttpPut("ChangePassword/{id}")]
        public async Task<IActionResult> ChangePassword(int Id, PasswordModel ps){
            
            try{
                var result = await _userService.ChangePassword(Id, ps.Password!);

                    return Ok(result);
                           
            }
            catch(Exception ex){
                return BadRequest(ex);
            }
            

        }

        


        
    }
}