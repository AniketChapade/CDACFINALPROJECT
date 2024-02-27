using System;
using System.Collections.Generic;

namespace project_LMS.Models
{
    public partial class Login
    {
        public Login()
        {
            IssuedBooks = new HashSet<IssuedBook>();
        }

        public int LoginId { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public int? RollId { get; set; }

        public virtual Role? Roll { get; set; }
        public virtual Librarian? Librarian { get; set; }
        public virtual User? User { get; set; }
        public virtual ICollection<IssuedBook> IssuedBooks { get; set; }
    }
}
