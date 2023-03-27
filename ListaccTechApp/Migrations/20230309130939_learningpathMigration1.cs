using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ListaccTechApp.Migrations
{
    /// <inheritdoc />
    public partial class learningpathMigration1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "LearningPaths",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "LearningPaths");
        }
    }
}
