﻿// <auto-generated />
using HippocampusUON.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace HippocampusUON.Migrations
{
    [DbContext(typeof(WebAPIDBContext))]
    [Migration("20220525124050_AddProperty")]
    partial class AddProperty
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("HippocampusUON.WebAPIData", b =>
                {
                    b.Property<string>("AdministratorID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AdministratorFirstName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AdministratorID");

                    b.ToTable("WAPIData");
                });
#pragma warning restore 612, 618
        }
    }
}
