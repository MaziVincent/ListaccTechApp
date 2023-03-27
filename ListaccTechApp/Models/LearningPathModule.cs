namespace ListaccTechApp.Models
{
    public class LearningPathModule
    {
        public int Id { get; set; }
        public int LearningPathId { get; set; }
        public LearningPath? LearningPath { get; set; }
        public int ModuleId { get; set; }
        public Module? Module { get; set; }

    }
}