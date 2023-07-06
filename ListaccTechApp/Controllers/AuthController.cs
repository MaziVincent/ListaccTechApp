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
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity;
using System.IdentityModel.Tokens.Jwt;

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
        
        


        public AuthController(MyDbContext context, ITokenGenerator tokenGenerator,
            IOtherServices oService, IMapper mapper, IHttpClientFactory ClientFactory,
            IUserService userService)

        {
            _context = context;
            _tokenGenerator = tokenGenerator;
            _oService = oService;  
            _mapper = mapper;
            _ClientFactory = ClientFactory;
            _userService = userService;
           
            
        }
        // ListaccTechApp/Auth/Login
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(UserLogin login){

            if(!ModelState.IsValid){

                return BadRequest();
            }

            var pmessage = login.Password;
            var currentUser = await _context.Users.Where(u => u.Email!.ToUpper().CompareTo(login.EmailAddress!.ToUpper())==0).FirstOrDefaultAsync();
            if(currentUser == null){
                return NotFound(new{error = "User Does not exist"});
            }else if(currentUser.Status == false){

                return BadRequest(new{error = "User has been Disabled"});

            }else{

                var passwordHash = Hash.Create(pmessage!, currentUser.salt!);

                if(currentUser.PasswordHash!.CompareTo(passwordHash)==0){

                    //gets the type of user
                    var type = _oService.Strip(currentUser.GetType().ToString());
                    var tokenString = await _tokenGenerator.GenerateToken(login.EmailAddress!, currentUser.Id, type);
                    
                    var refreshToken = new RefreshToken()
                    {
                        UserId = currentUser.Id,
                        User = currentUser,
                        JwtId = tokenString.Jwt_Id,
                        IsUsed = false,
                        AddedDate = DateTime.UtcNow,
                        ExpiryDate = DateTime.UtcNow.AddDays(7),
                        Token = _tokenGenerator.GenerateRefreshToken()
                    };
                    await _context.AddAsync(refreshToken);
                  
                   SetRefreshToken(refreshToken);
                   // _context.Users.Update(currentUser);

                    await _context.SaveChangesAsync();

                    var theCurrentUser = new CurrentUser() {

                        Id = currentUser.Id,
                        FirstName = currentUser.FirstName,
                        LastName = currentUser.LastName,
                        Gender = currentUser.Gender,
                        Email = currentUser.Email,
                        PhoneNumber = currentUser.PhoneNumber,
                        Status = currentUser.Status,
                        Role = type
                        
                    };
                    

                    var token = new {

                        token = tokenString.TokenString,
                        expires_at = tokenString.Expire_At,
                        currentUser = theCurrentUser

                    };

                    return Ok(token);


                }

                return BadRequest("The pasword is Invalid");

            }

            

        }

         public void SetRefreshToken(RefreshToken refreshToken){

            var cookieOptions = new CookieOptions{

                HttpOnly = true,
                Expires = refreshToken.ExpiryDate
            };

            Response.Cookies.Append("refreshToken",refreshToken.Token!, cookieOptions);
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

                    var currentUser = await _context.Users.Where(u => u.Email!.ToUpper().CompareTo(user!.email!.ToUpper()) == 0).FirstOrDefaultAsync();
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
                        var tokenString = await _tokenGenerator.GenerateToken(currentUser.Email!, currentUser.Id, type);

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

        //Refresh token
        [HttpPost]
        [Route("RefreshToken")]

        public async Task<IActionResult> RefreshToken() {

            var refreshToken = Request.Cookies["refreshToken"];
            
            if (refreshToken is null) {

                return BadRequest("Invalid Request or refresh Token");
            }

             var savedRefreshToken = await _context.RefreshTokens.Where(u => u.Token!.Equals(refreshToken)).FirstOrDefaultAsync();
            var user = await _context.Users.Where(u => u.Id == savedRefreshToken!.UserId).FirstOrDefaultAsync();

            //var principal = _tokenGenerator.GetClaimsPrincipal(accessToken!);
            //string email = principal!.Identity!.Name!;
            //var user = await _context.Users.Where(u => u.Email == email).FirstOrDefaultAsync();
            //var savedRefreshToken = await _context.RefreshTokens.Where(u => u.UserId == user!.Id).OrderBy(u => u.AddedDate).LastOrDefaultAsync();
            if (user == null || savedRefreshToken!.Token is null || savedRefreshToken.ExpiryDate <= DateTime.UtcNow) {

                return BadRequest("invalid access token or refresh token");
            }

            var newAccessToken = await _tokenGenerator.GenerateToken(user.Email!, user.Id,user.GetType().ToString());
            // var generatedRefreshToken = _tokenGenerator.GenerateRefreshToken();
            // var newRefreshToken = new RefreshToken()
            // {

            //     Token = generatedRefreshToken,
            //     UserId = user.Id,
            //     User = user,
            //     JwtId = newAccessToken.Jwt_Id,
            //     IsUsed = false,
            //     AddedDate = DateTime.UtcNow,
            //     ExpiryDate = DateTime.UtcNow.AddHours(1),


            // };
           
            // await _context.AddAsync(newRefreshToken);
           // _context.Users.Update(user);
            await _context.SaveChangesAsync();

            var returnToken = new
            {
                accessToken = newAccessToken.TokenString,
                expires_at = newAccessToken.Expire_At,
            };

            return Ok(returnToken);



        }       
    }
}