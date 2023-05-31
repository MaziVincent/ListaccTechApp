﻿// <auto-generated />
using System;
using ListaccTechApp.Models.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ListaccTechApp.Migrations
{
    [DbContext(typeof(MyDbContext))]
    [Migration("20230309130939_learningpathMigration1")]
    partial class learningpathMigration1
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("ListaccTechApp.Models.LearningPath", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("LearningPaths");
                });

            modelBuilder.Entity("ListaccTechApp.Models.LearningPathModule", b =>
                {
                    b.Property<int>("LearningPathId")
                        .HasColumnType("integer");

                    b.Property<int>("ModuleId")
                        .HasColumnType("integer");

                    b.Property<int>("Id")
                        .HasColumnType("integer");

                    b.HasKey("LearningPathId", "ModuleId");

                    b.HasIndex("ModuleId");

                    b.ToTable("LearningPathModules");
                });

            modelBuilder.Entity("ListaccTechApp.Models.LearningPathStudent", b =>
                {
                    b.Property<int>("LearningPathId")
                        .HasColumnType("integer");

                    b.Property<int>("Online_StudentId")
                        .HasColumnType("integer");

                    b.Property<int>("Id")
                        .HasColumnType("integer");

                    b.HasKey("LearningPathId", "Online_StudentId");

                    b.HasIndex("Online_StudentId");

                    b.ToTable("LearningPathStudents");
                });

            modelBuilder.Entity("ListaccTechApp.Models.Lesson", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Body")
                        .HasColumnType("text");

                    b.Property<int>("Index")
                        .HasColumnType("integer");

                    b.Property<string>("SubTitle")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.Property<int>("TopicId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("TopicId");

                    b.ToTable("Lessons");
                });

            modelBuilder.Entity("ListaccTechApp.Models.LessonMedia", b =>
                {
                    b.Property<int>("LessonId")
                        .HasColumnType("integer");

                    b.Property<int>("MediaId")
                        .HasColumnType("integer");

                    b.Property<int>("Id")
                        .HasColumnType("integer");

                    b.HasKey("LessonId", "MediaId");

                    b.HasIndex("MediaId");

                    b.ToTable("LessonMedias");
                });

            modelBuilder.Entity("ListaccTechApp.Models.Media", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ImagePath")
                        .HasColumnType("text");

                    b.Property<string>("VideoPath")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Medias");
                });

            modelBuilder.Entity("ListaccTechApp.Models.Module", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Modules");
                });

            modelBuilder.Entity("ListaccTechApp.Models.Progress", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("LessonId")
                        .HasColumnType("integer");

                    b.Property<int>("Online_StudentId")
                        .HasColumnType("integer");

                    b.Property<int>("TopicId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Progress");
                });

            modelBuilder.Entity("ListaccTechApp.Models.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("ListaccTechApp.Models.Topic", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<int>("Index")
                        .HasColumnType("integer");

                    b.Property<int>("ModuleId")
                        .HasColumnType("integer");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("ModuleId");

                    b.ToTable("Topics");
                });

            modelBuilder.Entity("ListaccTechApp.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("integer");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("boolean");

                    b.Property<string>("FirstName")
                        .HasColumnType("text");

                    b.Property<string>("Gender")
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("boolean");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("boolean");

                    b.Property<string>("SearchString")
                        .HasColumnType("text");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("text");

                    b.Property<bool>("Status")
                        .HasColumnType("boolean");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("boolean");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("salt")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers", (string)null);

                    b.HasDiscriminator<string>("Discriminator").HasValue("User");

                    b.UseTphMappingStrategy();
                });

            modelBuilder.Entity("ListaccTechApp.Models.UserRole", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.Property<int>("RoleId")
                        .HasColumnType("integer");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<int>("RoleId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("text");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("text");

                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("integer");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("ListaccTechApp.Models.Admin", b =>
                {
                    b.HasBaseType("ListaccTechApp.Models.User");

                    b.HasDiscriminator().HasValue("Admin");
                });

            modelBuilder.Entity("ListaccTechApp.Models.OnlineStudent", b =>
                {
                    b.HasBaseType("ListaccTechApp.Models.User");

                    b.Property<DateTime?>("DateOfBirth")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime?>("DateRegistered")
                        .HasColumnType("timestamp with time zone");

                    b.HasDiscriminator().HasValue("OnlineStudent");
                });

            modelBuilder.Entity("ListaccTechApp.Models.LearningPathModule", b =>
                {
                    b.HasOne("ListaccTechApp.Models.LearningPath", "LearningPath")
                        .WithMany("LearningPathModules")
                        .HasForeignKey("LearningPathId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ListaccTechApp.Models.Module", "Module")
                        .WithMany("LearningPathModules")
                        .HasForeignKey("ModuleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("LearningPath");

                    b.Navigation("Module");
                });

            modelBuilder.Entity("ListaccTechApp.Models.LearningPathStudent", b =>
                {
                    b.HasOne("ListaccTechApp.Models.LearningPath", "LearningPath")
                        .WithMany("LearningPathStudents")
                        .HasForeignKey("LearningPathId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ListaccTechApp.Models.OnlineStudent", "OnlineStudent")
                        .WithMany("LearningPathStudents")
                        .HasForeignKey("Online_StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("LearningPath");

                    b.Navigation("OnlineStudent");
                });

            modelBuilder.Entity("ListaccTechApp.Models.Lesson", b =>
                {
                    b.HasOne("ListaccTechApp.Models.Topic", "Topic")
                        .WithMany("Lessons")
                        .HasForeignKey("TopicId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Topic");
                });

            modelBuilder.Entity("ListaccTechApp.Models.LessonMedia", b =>
                {
                    b.HasOne("ListaccTechApp.Models.Lesson", "Lesson")
                        .WithMany("lessonMedias")
                        .HasForeignKey("LessonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ListaccTechApp.Models.Media", "Media")
                        .WithMany("lessonMedias")
                        .HasForeignKey("MediaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Lesson");

                    b.Navigation("Media");
                });

            modelBuilder.Entity("ListaccTechApp.Models.Topic", b =>
                {
                    b.HasOne("ListaccTechApp.Models.Module", "Module")
                        .WithMany("Topics")
                        .HasForeignKey("ModuleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Module");
                });

            modelBuilder.Entity("ListaccTechApp.Models.UserRole", b =>
                {
                    b.HasOne("ListaccTechApp.Models.Role", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ListaccTechApp.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("ListaccTechApp.Models.Role", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("ListaccTechApp.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("ListaccTechApp.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.HasOne("ListaccTechApp.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ListaccTechApp.Models.LearningPath", b =>
                {
                    b.Navigation("LearningPathModules");

                    b.Navigation("LearningPathStudents");
                });

            modelBuilder.Entity("ListaccTechApp.Models.Lesson", b =>
                {
                    b.Navigation("lessonMedias");
                });

            modelBuilder.Entity("ListaccTechApp.Models.Media", b =>
                {
                    b.Navigation("lessonMedias");
                });

            modelBuilder.Entity("ListaccTechApp.Models.Module", b =>
                {
                    b.Navigation("LearningPathModules");

                    b.Navigation("Topics");
                });

            modelBuilder.Entity("ListaccTechApp.Models.Topic", b =>
                {
                    b.Navigation("Lessons");
                });

            modelBuilder.Entity("ListaccTechApp.Models.OnlineStudent", b =>
                {
                    b.Navigation("LearningPathStudents");
                });
#pragma warning restore 612, 618
        }
    }
}
