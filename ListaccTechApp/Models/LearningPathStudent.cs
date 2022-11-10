namespace ListaccTechApp.Models
{
    public class LearningPathStudent
    {
        public int Id { get; set; }
        public int LearningPathId { get; set; }
        public LearningPath? LearningPath { get; set; }
        public int Online_StudentId { get; set; }
        public OnlineStudent? OnlineStudent { get; set; }
    }
}