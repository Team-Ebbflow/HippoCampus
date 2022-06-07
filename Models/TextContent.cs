using System;
using System.ComponentModel.DataAnnotations;

namespace HippocampusUON.Models
{
    public class TextContent
    {
        [Key]
        public int textContentID { get; set; }

        public string textContent { get; set; }

        public string textDescription { get; set; }
    }
}
