using System;
using System.ComponentModel.DataAnnotations;

namespace HippocampusUON
{
    public class TimelineActivities
    {
        [Key]
        public int Id { get; set; }

        public string Identifier { get; set; }

        public string EventContent { get; set; }

        public DateTime Date { get; set; }
    }
}
