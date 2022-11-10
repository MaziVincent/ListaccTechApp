using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace ListaccTechApp.Models.Data
{
    public class MyDbContext : IdentityDbContext<User, Role, int, 
    IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, 
    IdentityUserToken<int>>
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options){

        }

        protected override void OnModelCreating( ModelBuilder modelBuilder){

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<LearningPathModule>().HasKey(x=> new{x.LearningPathId, x.ModuleId});
            modelBuilder.Entity<LearningPathModule>().HasOne(x => x.LearningPath)
                                                    .WithMany(x => x.LearningPathModules)
                                                    .HasForeignKey(x => x.LearningPathId);
              modelBuilder.Entity<LearningPathModule>().HasOne(x => x.Module)
                                                    .WithMany(x => x.LearningPathModules)
                                                    .HasForeignKey(x => x.ModuleId);


            modelBuilder.Entity<LearningPathStudent>().HasKey(x=> new{x.LearningPathId, x.Online_StudentId});
            modelBuilder.Entity<LearningPathStudent>().HasOne(x => x.LearningPath)
                                                    .WithMany(x => x.LearningPathStudents)
                                                    .HasForeignKey(x => x.LearningPathId);
              modelBuilder.Entity<LearningPathStudent>().HasOne(x => x.OnlineStudent)
                                                    .WithMany(x => x.LearningPathStudents)
                                                    .HasForeignKey(x => x.Online_StudentId);


           


        }

        public DbSet<OnlineStudent>? OnlineStudents { get; set; }
        public DbSet<Admin>? Admins { get; set; }
        public DbSet<LearningPath>? LearningPaths { get; set; }
        public DbSet<LearningPathModule>? LearningPathModules { get; set; }
        public DbSet<LearningPathStudent>? LearningPathStudents { get; set; }
        public DbSet<Media>? Medias { get; set; }
        public DbSet<Module>? Modules { get; set; }
        public DbSet<Topic>? Topics { get; set; }
        public DbSet<Lesson>? Lessons {get; set;}
        public DbSet<Progress>? Progress {get; set;}

           
        
    }
}