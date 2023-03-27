namespace ListaccTechApp.ViewModels
{
    public class LearningPathModel
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public IFormFile? LearningPathAvatar { get; set; }
        public string? ImageUrl { get; set; }
    }
}
