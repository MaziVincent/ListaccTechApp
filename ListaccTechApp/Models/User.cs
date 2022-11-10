using Microsoft.AspNetCore.Identity;

namespace ListaccTechApp.Models
{
    public class User : IdentityUser<int>
    {
       public string? FirstName { get; set; }
       public string? LastName { get; set; }
       public string? Gender { get; set; } 
       public bool Status {get;set;}
       public string? salt {get;set;}
       public string? SearchString {get; set;}
       


    }
}