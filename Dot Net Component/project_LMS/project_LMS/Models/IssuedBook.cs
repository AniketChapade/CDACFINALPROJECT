using System;
using System.Collections.Generic;

namespace project_LMS.Models
{
    public partial class IssuedBook
    {
        public int IssuedId { get; set; }
        public int? ApproveStatus { get; set; }
        public DateTime? IssueDate { get; set; }
        public DateTime? ReturnDate { get; set; }
        public int? BookId { get; set; }
        public int? LoginId { get; set; }

        public virtual Book? Book { get; set; }
        public virtual Login? Login { get; set; }
    }
}
