using Microsoft.EntityFrameworkCore.Migrations;

namespace HippocampusUON.Migrations
{
    public partial class AddProperty2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WAPIData");

            migrationBuilder.CreateTable(
                name: "Administrators",
                columns: table => new
                {
                    adminId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    adminFirstName = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    adminLastName = table.Column<string>(type: "nvarchar(MAX)", nullable: true),
                    adminMobile = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    adminEmail = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    adminPassword = table.Column<string>(type: "nvarchar(50)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Administrators", x => x.adminId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Administrators");

            migrationBuilder.CreateTable(
                name: "WAPIData",
                columns: table => new
                {
                    AdministratorID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AdministratorFirstName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WAPIData", x => x.AdministratorID);
                });
        }
    }
}
