using System;
using System.Collections.Generic;

namespace project_LMS.Models
{
    public partial class Librarian
    {
        public int LibrarianId { get; set; }
        public string? AadharId { get; set; }
        public string? Address { get; set; }
        public string? EducationalQualification { get; set; }
        public string? Email { get; set; }
        public string? Firstname { get; set; }
        public string? Lastname { get; set; }
        public string? MobileNo { get; set; }
        public string? Password { get; set; }
        public int? LoginId { get; set; }

        public virtual Login? Login { get; set; }
    }
}
