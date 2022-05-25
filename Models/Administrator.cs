using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HippocampusUON
{
    public class Administrator
    {
        [Key]
        public int adminId { get; set; }

        [Column(TypeName ="nvarchar(MAX)")]
        public string adminFirstName { get; set; }

        [Column(TypeName ="nvarchar(MAX)")]
        public string adminLastName { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string adminMobile { get; set; }

        [Column(TypeName ="nvarchar(50)")]
        public string adminEmail { get; set; }
        
        [Column(TypeName ="nvarchar(50)")]
        public string adminPassword { get; set; }
    }
}
