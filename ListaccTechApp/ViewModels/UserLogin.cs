using System.ComponentModel.DataAnnotations;

namespace ListaccTechApp.ViewModels
{
    public class UserLogin
    {
        [Required]
        [EmailAddress(ErrorMessage = "Enter a valid email address")]
        public string? EmailAddress { get; set; }

        [Required]
        public string? Password { get; set; }
    }
}
