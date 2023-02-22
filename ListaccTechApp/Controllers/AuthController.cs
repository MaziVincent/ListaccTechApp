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
using System.Net.Http.Headers;
using Newtonsoft.Json;
using ListaccTechApp.Models;

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
        private readonly IHttpClientFactory _ClientFactory;
        private readonly IUserService _userService;
        public AuthController(MyDbContext context, ITokenGenerator tokenGenerator, IOtherServices oService, IMapper mapper, IHttpClientFactory ClientFactory, IUserService userService)
        {
            _context = context;
            _tokenGenerator = tokenGenerator;
            _oService = oService;  
            _mapper = mapper;
            _ClientFactory = ClientFactory;
            _userService = userService;
            
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
                    var tokenString = await _tokenGenerator.GenerateToken(login.EmailAddress!, currentUser.Id, type);
                    var theCurrentUser =  _mapper.Map<CurrentUser>(currentUser);
                    theCurrentUser.Role = type;

                    var token = new {
                        token = tokenString,
                        currentUser = theCurrentUser
                    };

                    return Ok(token);


                }

                return BadRequest("The pasword is Invalid");

            }

            

        }

        [HttpPost("GoogleAuth")]
        public async Task<IActionResult> GoogleAuth([FromForm] GoogleAuthToken GetToken)
        {
            var token = GetToken.token;
            try
            {
                var request = new HttpRequestMessage(HttpMethod.Get, "https://www.googleapis.com/oauth2/v2/userinfo");
                var client = _ClientFactory.CreateClient();
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
                HttpResponseMessage response = await client.SendAsync(request, HttpCompletionOption.ResponseHeadersRead);
                if(response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    var apiString = await response.Content.ReadAsStringAsync();
                    var user = JsonConvert.DeserializeObject<GoogleAuth>(apiString);

                    var currentUser = await _context.Users.Where(u => u.Email.ToUpper().CompareTo(user!.email!.ToUpper()) == 0).FirstOrDefaultAsync();
                    if (currentUser == null)
                    {
                        var newUser = new OnlineStudent();
                        newUser.Email = user!.email;
                        newUser.FirstName = user!.given_name;
                        newUser.LastName = user!.family_name;
                        newUser.SearchString = user!.given_name!.ToUpper() + user!.family_name!.ToUpper() + user!.email!.ToUpper();
                       

                        await _context.OnlineStudents!.AddAsync(newUser);
                        await _context.SaveChangesAsync();
                        //gets the type of user
                        var type = _oService.Strip(newUser.GetType().ToString());


                        var tokenString = await _tokenGenerator.GenerateToken(user.email, newUser.Id, type);

                        return Created("Created", new
                        {
                            token = tokenString,
                            Id = newUser.Id,
                            Firstname = newUser.FirstName,
                            Lastname = newUser.LastName,
                            Email = newUser.Email,
                        });
                    }
                    else
                    {
                        var type = _oService.Strip(currentUser.GetType().ToString());
                        var tokenString = await _tokenGenerator.GenerateToken(currentUser.Email, currentUser.Id, type);

                        return Ok(new
                        {
                            token = tokenString,
                            Id = currentUser.Id,
                            Firstname = currentUser.FirstName,
                            Lastname = currentUser.LastName,
                            Email = currentUser.Email,
                        });
                    }

                }
                else
                {
                    return NoContent();
                }
            }catch(System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
    }
}