using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ListaccTechApp.Models.Data;
using ListaccTechApp.Interfaces;

namespace ListaccTechApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DataController : ControllerBase
    {
        private readonly IOtherServices _oService;

        public DataController(IOtherServices oService)
        {
            _oService = oService;
        }

        [Authorize]
        [HttpGet("GetData")]
        public async Task<IActionResult> GetData(){

            var data =  await _oService.GetData();
            if(data is null){
                return NotFound();
            }

            return Ok(data);
            
        }


    }
}