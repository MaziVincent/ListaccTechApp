using System.ComponentModel.DataAnnotations;

namespace ListaccTechApp.ViewModels
{
    public class StudentDto
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
        [Required]
        public string? Email { get; set; }

        public DateTime? DateOfBirth { get; set; }


    }
    public class StudentModel : StudentDto
    {

        [Required]
        public string? Password { get; set; }
    }
}

