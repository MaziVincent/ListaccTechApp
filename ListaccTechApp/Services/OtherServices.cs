using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ListaccTechApp.Interfaces;

namespace ListaccTechApp.Services
{
    public class OtherServices : IOtherServices
    {
        public string Strip(string type){

            var retype = type.Substring(type.LastIndexOf('.') + 1);
            return retype;
        }
    }
}