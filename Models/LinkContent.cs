using System;
using System.ComponentModel.DataAnnotations;

namespace HippocampusUON.Models
{
    public class LinkContent
    {
        [Key]
        public int linkContentID { get; set; }

        public string linkURI { get; set; }

        public string linkDescription { get; set; }
    }
}
