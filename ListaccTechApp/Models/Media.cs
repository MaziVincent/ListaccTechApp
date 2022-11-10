using System.ComponentModel.DataAnnotations.Schema;

namespace ListaccTechApp.Models
{
    public class Media
    {
        public int Id { get; set; }
        [NotMapped]
        public IFormFile? Image {get;set;}
        public string? ImagePath { get; set; }
        [NotMapped]
        public IFormFile? Video { get; set; }
        public string? VideoPath {get;set;}
        public int LessonId { get; set; }
        public Lesson? Lesson { get; set; }


    }
}