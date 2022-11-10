using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ListaccTechApp.Models
{
    public class Progress
    {
        public int Id { get; set; }
        public int Online_StudentId {get; set;}
        public int TopicId { get; set; }
        public int LessonId { get; set; }

    }
}