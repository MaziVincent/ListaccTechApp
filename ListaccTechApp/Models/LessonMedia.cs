namespace ListaccTechApp.Models
{
    public class LessonMedia
    {
        public int Id { get; set; }
        public int MediaId { get; set; }
        public Media? Media { get; set; }
        public int LessonId { get; set; }
        public Lesson? Lesson { get; set; }
    }
}
