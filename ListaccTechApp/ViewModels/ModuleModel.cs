using ListaccTechApp.Models;

namespace ListaccTechApp.ViewModels
{
    public class ModuleModel
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
        public List<LearningPath>? LearningPaths { get; set; }
    }
}
