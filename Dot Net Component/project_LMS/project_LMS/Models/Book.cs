using System;
using System.Collections.Generic;

namespace project_LMS.Models
{
    public partial class Book
    {
        public Book()
        {
            IssuedBooks = new HashSet<IssuedBook>();
        }

        public int BookId { get; set; }
        public string? Author { get; set; }
        public string? Genre { get; set; }
        public string? Isbn { get; set; }
        public double? Price { get; set; }
        public string? Title { get; set; }

        public virtual ICollection<IssuedBook> IssuedBooks { get; set; }
    }
}
