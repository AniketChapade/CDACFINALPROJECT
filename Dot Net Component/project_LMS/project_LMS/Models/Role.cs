using System;
using System.Collections.Generic;

namespace project_LMS.Models
{
    public partial class Role
    {
        public Role()
        {
            Logins = new HashSet<Login>();
        }

        public int RollId { get; set; }
        public string? RollName { get; set; }

        public virtual ICollection<Login> Logins { get; set; }
    }
}
