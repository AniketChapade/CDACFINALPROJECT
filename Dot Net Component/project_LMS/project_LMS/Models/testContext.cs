using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace project_LMS.Models
{
    public partial class testContext : DbContext
    {
        public testContext()
        {
        }

        public testContext(DbContextOptions<testContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Book> Books { get; set; } = null!;
        public virtual DbSet<IssuedBook> IssuedBooks { get; set; } = null!;
        public virtual DbSet<Librarian> Librarians { get; set; } = null!;
        public virtual DbSet<Login> Logins { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySql("server=localhost;port=3306;user=root;password=root;database=test", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.31-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_0900_ai_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Book>(entity =>
            {
                entity.ToTable("book");

                entity.Property(e => e.BookId).HasColumnName("book_id");

                entity.Property(e => e.Author)
                    .HasMaxLength(255)
                    .HasColumnName("author");

                entity.Property(e => e.Genre)
                    .HasMaxLength(255)
                    .HasColumnName("genre");

                entity.Property(e => e.Isbn)
                    .HasMaxLength(255)
                    .HasColumnName("isbn");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Title)
                    .HasMaxLength(255)
                    .HasColumnName("title");
            });

            modelBuilder.Entity<IssuedBook>(entity =>
            {
                entity.HasKey(e => e.IssuedId)
                    .HasName("PRIMARY");

                entity.ToTable("issued_book");

                entity.HasIndex(e => e.BookId, "FK72ejbt1rdbpfx7oh5q3xvcxmu");

                entity.HasIndex(e => e.LoginId, "FKqd361pxie37gds3lsvymf2o27");

                entity.Property(e => e.IssuedId).HasColumnName("issued_id");

                entity.Property(e => e.ApproveStatus).HasColumnName("approve_status");

                entity.Property(e => e.BookId).HasColumnName("book_id");

                entity.Property(e => e.IssueDate)
                    .HasMaxLength(6)
                    .HasColumnName("issue_date");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.ReturnDate)
                    .HasMaxLength(6)
                    .HasColumnName("return_date");

                entity.HasOne(d => d.Book)
                    .WithMany(p => p.IssuedBooks)
                    .HasForeignKey(d => d.BookId)
                    .HasConstraintName("FK72ejbt1rdbpfx7oh5q3xvcxmu");

                entity.HasOne(d => d.Login)
                    .WithMany(p => p.IssuedBooks)
                    .HasForeignKey(d => d.LoginId)
                    .HasConstraintName("FKqd361pxie37gds3lsvymf2o27");
            });

            modelBuilder.Entity<Librarian>(entity =>
            {
                entity.ToTable("librarian");

                entity.HasIndex(e => e.LoginId, "UK_6njs0v46rpvykstlqf7awt4ib")
                    .IsUnique();

                entity.Property(e => e.LibrarianId).HasColumnName("librarian_id");

                entity.Property(e => e.AadharId)
                    .HasMaxLength(255)
                    .HasColumnName("aadhar_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");

                entity.Property(e => e.EducationalQualification)
                    .HasMaxLength(255)
                    .HasColumnName("educational_qualification");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.Firstname)
                    .HasMaxLength(255)
                    .HasColumnName("firstname");

                entity.Property(e => e.Lastname)
                    .HasMaxLength(255)
                    .HasColumnName("lastname");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.MobileNo)
                    .HasMaxLength(255)
                    .HasColumnName("mobile_no");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.HasOne(d => d.Login)
                    .WithOne(p => p.Librarian)
                    .HasForeignKey<Librarian>(d => d.LoginId)
                    .HasConstraintName("FK8u7x47xya5towfy8ia2pa9p4p");
            });

            modelBuilder.Entity<Login>(entity =>
            {
                entity.ToTable("login");

                entity.HasIndex(e => e.RollId, "FK6cpxocvme59tuh04nbibo72re");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.RollId).HasColumnName("roll_id");

                entity.HasOne(d => d.Roll)
                    .WithMany(p => p.Logins)
                    .HasForeignKey(d => d.RollId)
                    .HasConstraintName("FK6cpxocvme59tuh04nbibo72re");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasKey(e => e.RollId)
                    .HasName("PRIMARY");

                entity.ToTable("roles");

                entity.Property(e => e.RollId)
                    .ValueGeneratedNever()
                    .HasColumnName("roll_id");

                entity.Property(e => e.RollName)
                    .HasMaxLength(255)
                    .HasColumnName("roll_name");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.LoginId, "UK_i3xs7wmfu2i3jt079uuetycit")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Address)
                    .HasMaxLength(255)
                    .HasColumnName("address");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .HasColumnName("email");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .HasColumnName("first_name");

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .HasColumnName("last_name");

                entity.Property(e => e.LoginId).HasColumnName("login_id");

                entity.Property(e => e.MobileNo)
                    .HasMaxLength(255)
                    .HasColumnName("mobile_no");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.HasOne(d => d.Login)
                    .WithOne(p => p.User)
                    .HasForeignKey<User>(d => d.LoginId)
                    .HasConstraintName("FK7el0sevv2a3r9ysclees6ig9x");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
