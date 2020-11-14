using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FindMyRide.Core.Models
{
    public class Role
    {
        [Key]
        public Guid RoleId { get; set; }
        public ICollection<User> Users { get; set; } = new HashSet<User>();
    }

}
