using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace HippocampusUON.Models
{
    public class WebAPIDBContext : DbContext
    {
        public WebAPIDBContext(DbContextOptions<WebAPIDBContext> options) : base(options)
        {

        }

        public DbSet<Administrator> Administrators { get; set; }
        public DbSet<LinkContent> LinkContents { get; set; }
        public DbSet<TextContent> TextContents { get; set; }
        public DbSet<UpcomingEvents> UpcomingEvents { get; set; }
        public DbSet<TimelineActivities> TimelineActivities { get; set; }
    }
}
