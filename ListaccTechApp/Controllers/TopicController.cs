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

        [Authorize(Roles = "Admin")]
        [HttpPost("Create")]

        public async Task<IActionResult> CreateTopic(TopicModel topic)
        {
            if (!ModelState.IsValid)
            {

                return BadRequest();
            }

            var newtopic = _mapper.Map<Topic>(topic);


            try
            {

                _tService.Add(newtopic);
                await _tService.SaveAll();
                return Ok("Created");

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
        [Authorize(Roles = "Admin")]
        [HttpPut("Edit/{id}")]
        public async Task<IActionResult> EditTopic(TopicModel topic)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            try
            {
                var topicUpdate = _mapper.Map<Topic>(topic);
                var result = await _tService.UpdateTopic(topicUpdate);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Authorize]
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAllTopics(SearchPaging props)
        {
            try
            {
                var topics = await _tService.GetAllTopics(props);
                List<TopicModel> result = _mapper.Map<List<TopicModel>>(topics);
                var dataList = new
                {
                    topics.CurrentPage,
                    topics.PageSize,
                    topics.TotalCount,
                    topics.TotalPages,
                    topics.HasNext,
                    topics.HasPrevious,

                };
                var data = new
                {
                    result, dataList
                };
                return Ok(data);

            }catch(Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [Authorize]
        [HttpGet("Get/{id}")]
        public async Task<IActionResult> GetTopic(int Id)
        {
            try
            {
                var topic = await _tService.GetTopic(Id);

                if(topic is null)
                {
                    return NotFound();
                }
               
                return Ok(topic);

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        [Authorize(Roles ="Admin")]
        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteTopic(int Id)
        {
            try
            {
                var response = await _tService.DeleteTopic(Id);
                return Ok(response);
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}