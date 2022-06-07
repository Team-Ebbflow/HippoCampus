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
    }
}
