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


        [Authorize(Roles="Admin")]
        [HttpPost("Create")]
        public async Task<IActionResult> CreateModule(ModuleModel module){

            if(!ModelState.IsValid){

                return BadRequest(new{Error="invalid request"});
            }
            var newModule = _mapper.Map<Module>(module);
            // Module newModule = new Module();
            // newModule.Name  = module.Name;
            // newModule.Description = module.Description;

            if(!await _mService.IsModuleExist(module.Name!)){

              try{
                  var response =   await _mService.CreateModule(newModule);
                  if(response != "Created"){

                    return BadRequest(new {Error=" Error Creating Module"});

                  }

                  foreach(LearningPath lp in module.LearningPaths!){

                    var learnPath = await _db.LearningPaths!.Where(p => p.Id == lp.Id).FirstOrDefaultAsync();

                    if(learnPath != null){

                            LearningPathModule Lpm = new LearningPathModule{
                                Module = newModule,
                                LearningPath = learnPath
                            };
                            _mService.Add(Lpm);
                    }

                  

                }

                await _mService.SaveAll();

                return Ok();

              }catch(Exception ex){

                return BadRequest(ex);
              }

            }

            return BadRequest(new {Error = "Module Already Exist"});
            
        }
    }
}