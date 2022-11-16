using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ListaccTechApp.Models
{
    public class Lesson
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? SubTitle { get; set; }
        public string? Body { get; set; }
        public int Index { get; set;}
        public int TopicId { get; set; }
        public Topic? Topic  {get; set;}
        public ICollection<LessonMedia>? Medias { get; set; }
    }
}