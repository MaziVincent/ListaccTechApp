using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ListaccTechApp.Migrations
{
    /// <inheritdoc />
    public partial class updated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RefreshTokenId",
                table: "AspNetUsers");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "RefreshTokenId",
                table: "AspNetUsers",
                type: "integer",
                nullable: true);
        }
    }
}
