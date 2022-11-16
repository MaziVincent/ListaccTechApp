using System.ComponentModel.DataAnnotations.Schema;

namespace ListaccTechApp.ViewModels
{
    public class MediaModel
    {
        
        public IFormFile? Image { get; set; }
        public string? ImagePath { get; set; }
        public IFormFile? Video { get; set; }
        public string? VideoPath { get; set; }
    }
}
