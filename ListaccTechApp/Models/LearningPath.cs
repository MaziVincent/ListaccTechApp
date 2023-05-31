using System.ComponentModel.DataAnnotations.Schema;

namespace ListaccTechApp.Models
{
    public class LearningPath
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        [NotMapped]
        public IFormFile? Avatar { get; set; }
        public string? ImageUrl { get; set; }
        public ICollection<LearningPathStudent>? LearningPathStudents { get; set; }
        public ICollection<LearningPathModule>? LearningPathModules { get; set; }
        
    }
}