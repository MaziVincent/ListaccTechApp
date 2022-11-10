using System.ComponentModel.DataAnnotations;

namespace ListaccTechApp.ViewModels
{
    public class UserModel
    {
        public int Id { get; set; }

        [Required]
        public string? FirstName { get; set; }
        [Required]
        public string? LastName { get; set; }
        [Required]
        public string? Gender { get; set; }
        [Required]
        public string? PhoneNumber { get; set; }
        [Required]
        public bool Status { get; set; }
        public string? Email { get; set; }



    }

    public class CurrentUser : UserModel
    {
        public string? Role { get; set; }




    }

    public class UserDto : UserModel
    {

        [Required]
        public string? Password { get; set; }

    }


    public class PasswordModel
    {

        public string? Password { get; set; }
    }
}

