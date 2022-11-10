namespace ListaccTechApp.Models
{
    public class Topic
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int Index { get; set; }
        public int ModuleId { get; set; }
        public Module? Module { get; set; }
        public ICollection<Lesson>? Lessons {get; set;}

    }
}