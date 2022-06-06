using System;
using System.ComponentModel.DataAnnotations;

namespace HippocampusUON
{
    public class Administrator
    {
        [Key]
        public int adminId { get; set; }

        public string adminFirstName { get; set; }

        public string adminLastName { get; set; }

        public string adminMobile { get; set; }

        public string adminEmail { get; set; }
        
        public string adminPassword { get; set; }
    }
}
