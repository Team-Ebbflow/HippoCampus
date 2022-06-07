using System;
using System.ComponentModel.DataAnnotations;

namespace HippocampusUON.Models
{
    public class ImageContent
    {
        [Key]
        public int imageContentID { get; set; }

        public string imageURI { get; set; }

        public string imageDescription { get; set; }
    }
}
