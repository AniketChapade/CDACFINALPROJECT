using System;
using System.Collections.Generic;

namespace project_LMS.Models
{
    public partial class User
    {
        public int UserId { get; set; }
        public string? Address { get; set; }
        public string? Email { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? MobileNo { get; set; }
        public string? Password { get; set; }
        public int? LoginId { get; set; }

        public virtual Login? Login { get; set; }
    }
}
