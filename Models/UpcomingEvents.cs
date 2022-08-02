using System;
using System.ComponentModel.DataAnnotations;

namespace HippocampusUON.Models
{
    public class UpcomingEvents
    {
        [Key]
        public int Id { get; set; }

        public string Identifier { get; set; }

        public string EventContent { get; set; }

        public string Time { get; set; }
    }
}
