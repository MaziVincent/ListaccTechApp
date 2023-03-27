using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace ListaccTechApp.Models
{
    public class Role:IdentityRole<int>
    {
        public static string Admin = "Admin";
        public static string OnlineStudent = "OnlineStudent";
    }
}