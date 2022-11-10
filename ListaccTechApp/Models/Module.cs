namespace ListaccTechApp.Models
{
    public class Module
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public ICollection<LearningPathModule>? LearningPathModules { get; set; }
        public ICollection<Topic>? Topics { get; set; }
        
    }
}