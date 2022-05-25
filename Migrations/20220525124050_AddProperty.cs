using Microsoft.EntityFrameworkCore.Migrations;

namespace HippocampusUON.Migrations
{
    public partial class AddProperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WAPIData",
                columns: table => new
                {
                    AdministratorID = table.Column<string>(nullable: false),
                    AdministratorFirstName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WAPIData", x => x.AdministratorID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WAPIData");
        }
    }
}
