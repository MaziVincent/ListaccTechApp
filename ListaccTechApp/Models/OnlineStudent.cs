namespace ListaccTechApp.Models
{
    public class OnlineStudent: User
    {
        public OnlineStudent():base()
        {
            
        }

        public DateTime? DateRegistered { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public ICollection<LearningPathStudent>? LearningPathStudents { get; set; }
        
    }
}