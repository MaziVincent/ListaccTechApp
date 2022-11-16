namespace ListaccTechApp.ViewModels
{
    public class LessonModel
    {
        public string? Title { get; set; }
        public string? SubTitle { get; set; }
        public string? Body { get; set; }
        public int Index { get; set; }
        public int TopicId { get; set; }

        public List<int>? Images { get; set; }
    }
}
