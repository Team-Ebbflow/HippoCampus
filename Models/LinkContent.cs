using System;
using System.ComponentModel.DataAnnotations;

namespace HippocampusUON.Models
{
    public class LinkContent
    {
        [Key]
        public int Id { get; set; }

        public string Identifier { get; set; }

        public string Content { get; set; }

        public string Description { get; set; }
    }
}
