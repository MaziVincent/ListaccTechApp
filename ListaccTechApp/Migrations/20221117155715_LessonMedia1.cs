using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ListaccTechApp.Migrations
{
    /// <inheritdoc />
    public partial class LessonMedia1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_LessonMedias",
                table: "LessonMedias");

            migrationBuilder.DropIndex(
                name: "IX_LessonMedias_LessonId",
                table: "LessonMedias");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "LessonMedias",
                type: "integer",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer")
                .OldAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_LessonMedias",
                table: "LessonMedias",
                columns: new[] { "LessonId", "MediaId" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_LessonMedias",
                table: "LessonMedias");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "LessonMedias",
                type: "integer",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer")
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_LessonMedias",
                table: "LessonMedias",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_LessonMedias_LessonId",
                table: "LessonMedias",
                column: "LessonId");
        }
    }
}
