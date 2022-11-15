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
    public class ModuleController : ControllerBase
    {

        private readonly MyDbContext _db;
        private readonly IModuleService _mService;
        private readonly IMapper _mapper;

        public ModuleController(MyDbContext db, IModuleService mService, IMapper mapper)
        {
            _db = db;
            _mService = mService;
            _mapper = mapper;
        }


        [Authorize(Roles = "Admin")]
        [HttpPost("Create")]
        public async Task<IActionResult> CreateModule(ModuleModel module)
        {

            if (!ModelState.IsValid)
            {

                return BadRequest(new { Error = "invalid request" });
            }
            var newModule = _mapper.Map<Module>(module);


            if (!await _mService.IsModuleExist(module.Name!))
            {

                try
                {
                    var response = await _mService.CreateModule(newModule);
                    if (response != "Created")
                    {

                        return BadRequest(new { Error = " Error Creating Module" });

                    }

                    foreach (LearningPath lp in module.LearningPaths!)
                    {

                        var learnPath = await _db.LearningPaths!.Where(p => p.Id == lp.Id).FirstOrDefaultAsync();

                        if (learnPath != null)
                        {

                            LearningPathModule Lpm = new()
                            {
                                Module = newModule,
                                LearningPath = learnPath
                            };
                            _mService.Add(Lpm);
                        }



                    }

                    await _mService.SaveAll();

                    return Ok();

                }
                catch (Exception ex)
                {

                    return BadRequest(ex);
                }

            }

            return BadRequest(new { Error = "Module Already Exist" });

        }

        [Authorize(Roles = "Admin")]
        [HttpPut("Edit")]
        public async Task<IActionResult> UpdateModule(ModuleModel module)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var result = await _mService.UpdateModule(module);

                return Ok(result);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);

            }
        }
        [Authorize]
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAllModules(SearchPaging props)
        {
            try
            {
                var modules = await _mService.GetAllModules(props);
                var result = _mapper.Map<List<ModuleModel>>(modules);

                var dataList = new
                {
                    modules.PageSize,
                    modules.TotalCount,
                    modules.TotalPages,
                    modules.CurrentPage,
                    modules.HasNext,
                    modules.HasPrevious
                };

                var data = new
                {
                    result,
                    dataList
                };

                return Ok(data);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }

        [Authorize]
        [HttpGet("Get/{id}")]
        public async Task<IActionResult> GetModule(int Id)
        {
            try
            {
                var result = await _mService.GetModule(Id);
                if(result is null)
                {
                    return NotFound();
                }

                return Ok(result);

            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
           
        }

        [Authorize(Roles ="Admin")]
        [HttpDelete("Delete/{Id}")]
        public async Task<IActionResult> DeleteModule(int Id)
        {
            try
            {
               var response = await _mService.DeleteModule(Id);

                return Ok(response);

            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}