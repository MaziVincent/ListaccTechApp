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
    public class TopicController : ControllerBase
    {
        private readonly MyDbContext _db;
        private readonly IMapper _mapper;
        private readonly ITopicService _tService;

        public TopicController(ITopicService tService, IMapper mapper, MyDbContext db)
        {
            _tService = tService;
            _mapper = mapper;
            _db = db;
        }

        [Authorize(Roles="Admin")]
        [HttpPost("Create")]

        public async Task<IActionResult> CreateTopic(TopicModel topic){
           if(!ModelState.IsValid){

            return BadRequest();
           } 

           var newtopic =  _mapper.Map<Topic>(topic);
           

           try{

            _tService.Add(newtopic);
           await _tService.SaveAll();
           return Ok("Created");

           }
           catch(Exception ex){
            return BadRequest(ex);
           }

        }
    }
}