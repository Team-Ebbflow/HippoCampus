using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HippocampusUON
{
    public class PagesTable
    {
        [Key]
        public int pageID { get; set; }

        public string pageName { get; set; }

        [NotMapped]
        public int imageContentID { get; set; }

        [NotMapped]
        public string imageURI { get; set; }

        [NotMapped]
        public int linkContentID { get; set; }

        [NotMapped]
        public string linkURI { get; set; }

        [NotMapped]
        public int textContentID { get; set; }

        [NotMapped]
        public string textContent { get; set; }
    }
}
