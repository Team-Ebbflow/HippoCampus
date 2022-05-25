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
    [Migration("20220525141120_AddProperty3")]
    partial class AddProperty3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("HippocampusUON.Administrator", b =>
                {
                    b.Property<int>("adminId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("adminEmail")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("adminFirstName")
                        .HasColumnType("nvarchar(MAX)");

                    b.Property<string>("adminLastName")
                        .HasColumnType("nvarchar(MAX)");

                    b.Property<string>("adminMobile")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("adminPassword")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("adminId");

                    b.ToTable("Administrators");
                });
#pragma warning restore 612, 618
        }
    }
}
