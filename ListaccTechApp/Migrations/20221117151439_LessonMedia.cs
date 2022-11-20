using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ListaccTechApp.Migrations
{
    /// <inheritdoc />
    public partial class LessonMedia : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LessonMedia_Lessons_LessonId",
                table: "LessonMedia");

            migrationBuilder.DropForeignKey(
                name: "FK_LessonMedia_Medias_MediaId",
                table: "LessonMedia");

            migrationBuilder.DropPrimaryKey(
                name: "PK_LessonMedia",
                table: "LessonMedia");

            migrationBuilder.RenameTable(
                name: "LessonMedia",
                newName: "LessonMedias");

            migrationBuilder.RenameIndex(
                name: "IX_LessonMedia_MediaId",
                table: "LessonMedias",
                newName: "IX_LessonMedias_MediaId");

            migrationBuilder.RenameIndex(
                name: "IX_LessonMedia_LessonId",
                table: "LessonMedias",
                newName: "IX_LessonMedias_LessonId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_LessonMedias",
                table: "LessonMedias",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_LessonMedias_Lessons_LessonId",
                table: "LessonMedias",
                column: "LessonId",
                principalTable: "Lessons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LessonMedias_Medias_MediaId",
                table: "LessonMedias",
                column: "MediaId",
                principalTable: "Medias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LessonMedias_Lessons_LessonId",
                table: "LessonMedias");

            migrationBuilder.DropForeignKey(
                name: "FK_LessonMedias_Medias_MediaId",
                table: "LessonMedias");

            migrationBuilder.DropPrimaryKey(
                name: "PK_LessonMedias",
                table: "LessonMedias");

            migrationBuilder.RenameTable(
                name: "LessonMedias",
                newName: "LessonMedia");

            migrationBuilder.RenameIndex(
                name: "IX_LessonMedias_MediaId",
                table: "LessonMedia",
                newName: "IX_LessonMedia_MediaId");

            migrationBuilder.RenameIndex(
                name: "IX_LessonMedias_LessonId",
                table: "LessonMedia",
                newName: "IX_LessonMedia_LessonId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_LessonMedia",
                table: "LessonMedia",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_LessonMedia_Lessons_LessonId",
                table: "LessonMedia",
                column: "LessonId",
                principalTable: "Lessons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_LessonMedia_Medias_MediaId",
                table: "LessonMedia",
                column: "MediaId",
                principalTable: "Medias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
