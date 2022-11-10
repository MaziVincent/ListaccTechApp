using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Interfaces;
using ListaccTechApp.Models.Data;
using ListaccTechApp.Services;
using ListaccTechApp.ViewModels;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ListaccTechApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly MyDbContext _context;
        private readonly ITokenGenerator _tokenGenerator;
        private readonly IOtherServices _oService;
        private readonly IMapper _mapper;
        public AuthController(MyDbContext context, ITokenGenerator tokenGenerator, IOtherServices oService, IMapper mapper)
        {
            _context = context;
            _tokenGenerator = tokenGenerator;
            _oService = oService;  
            _mapper = mapper;

            
        }
        // ListaccTechApp/Auth/Login
        [HttpPost("Login")]
        public async Task<IActionResult> Login(UserLogin login){

            if(!ModelState.IsValid){

                return BadRequest();
            }

            var pmessage = login.Password;
            var currentUser = await _context.Users.Where(u => u.Email.ToUpper().CompareTo(login.EmailAddress!.ToUpper())==0).FirstOrDefaultAsync();
            if(currentUser == null){
                return NotFound(new{error = "User Does not exist"});
            }else if(currentUser.Status == false){

                return BadRequest(new{error = "User has been Disabled"});

            }else{

                var passwordHash = Hash.Create(pmessage!, currentUser.salt!);

                if(currentUser.PasswordHash.CompareTo(passwordHash)==0){

                    //gets the type of user
                    var type = _oService.Strip(currentUser.GetType().ToString());
                    var tokenString = await _tokenGenerator.GenerateToken(login, currentUser.Id, type);
                    var theCurrentUser =  _mapper.Map<CurrentUser>(currentUser);

                    var token = new {
                        token = tokenString,
                        currentUser = theCurrentUser
                    };

                    return Ok(token);


                }

                return BadRequest("The pasword is Invalid");

            }

            

        }
        
    }
}