﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Shop.FrontEnd.DAL.Entites;

namespace Shop.FrontEnd.Migrations
{
    [DbContext(typeof(EFDbContext))]
    [Migration("20190924133018_Product")]
    partial class Product
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Shop.FrontEnd.DAL.Entites.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Color");

                    b.Property<string>("Count");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<string>("Price");

                    b.HasKey("Id");

                    b.ToTable("tblProducts");
                });

            modelBuilder.Entity("Shop.FrontEnd.DAL.Entites.ProductImage", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Path");

                    b.Property<int?>("ProductId");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.ToTable("tblProductImages");
                });

            modelBuilder.Entity("Shop.FrontEnd.DAL.Entites.ProductImage", b =>
                {
                    b.HasOne("Shop.FrontEnd.DAL.Entites.Product", "Product")
                        .WithMany("Images")
                        .HasForeignKey("ProductId");
                });
#pragma warning restore 612, 618
        }
    }
}