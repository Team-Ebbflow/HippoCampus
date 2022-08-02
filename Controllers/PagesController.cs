using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HippocampusUON;
using HippocampusUON.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace HippocampusUON.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = AuthSchemes)]
    public class PagesController : ControllerBase
    {
        private readonly WebAPIDBContext _context;
        private const string AuthSchemes =
            CookieAuthenticationDefaults.AuthenticationScheme;

        public PagesController(WebAPIDBContext context)
        {
            _context = context;
        }

        // GET: api/pages/linkall
        [HttpGet("linkall")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<LinkContent>>> GetLinkContentAll()
        {
            return await _context.LinkContents
                .Select(x => new LinkContent { Id = x.Id, Identifier = x.Identifier, Content = x.Content, Description = x.Description })
                .ToListAsync();
        }

        // GET: api/pages/link&iden={iden}
        [HttpGet("link&iden={iden}")]
        [AllowAnonymous]
        public ActionResult<string> GetLinkContent(string iden)
        {
            var linkContent = _context.LinkContents.FromSqlInterpolated($"SELECT * FROM [dbo].[LinkContents] WHERE [dbo].[LinkContents].Identifier = {iden}").FirstOrDefault();
            if (linkContent == null)
            {
                return NotFound();
            }

            return linkContent.Content;
        }

        // PUT: api/Pages/5
        [HttpPut("link&{id}")]
        public async Task<IActionResult> PutLinkContent(LinkContent linkContent)
        {
            _context.Entry(linkContent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok("1");
        }

        // POST: api/Pages
        [HttpPost("link")]
        public async Task<ActionResult<LinkContent>> PostLinkContent(LinkContent linkContent)
        {
            _context.LinkContents.Add(linkContent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLinkContent", new { id = linkContent.Id }, linkContent);
        }

        // DELETE: api/Pages/5
        [HttpDelete("link&{id}")]
        public async Task<ActionResult<LinkContent>> DeleteLinkContent(int id)
        {
            var content = await _context.LinkContents.FindAsync(id);
            if (content == null)
            {
                return NotFound();
            }

            _context.LinkContents.Remove(content);
            await _context.SaveChangesAsync();

            return content;
        }





        [HttpGet("textall")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<TextContent>>> GetTextContentAll()
        {
            return await _context.TextContents
                .Select(x => new TextContent { Id = x.Id, Identifier = x.Identifier, Content = x.Content, Description = x.Description })
                .ToListAsync();
        }

        [HttpGet("text&iden={iden}")]
        [AllowAnonymous]
        public ActionResult<string> GetTextContent(string iden)
        {
            var textContent = _context.TextContents.FromSqlInterpolated($"SELECT * FROM [dbo].[TextContents] WHERE [dbo].[TextContents].Identifier = {iden}").FirstOrDefault();
            if (textContent == null)
            {
                return NotFound();
            }

            return textContent.Content;
        }

        [HttpPut("text&{id}")]
        public async Task<IActionResult> PutTextContent(TextContent textContent)
        {
            _context.Entry(textContent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok("1");
        }

        [HttpPost("text")]
        public async Task<ActionResult<TextContent>> PostTextContent(TextContent textContent)
        {
            _context.TextContents.Add(textContent);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTextContent", new { id = textContent.Id }, textContent);
        }

        [HttpDelete("text&{id}")]
        public async Task<ActionResult<TextContent>> DeleteTextContent(int id)
        {
            var content = await _context.TextContents.FindAsync(id);
            if (content == null)
            {
                return NotFound();
            }

            _context.TextContents.Remove(content);
            await _context.SaveChangesAsync();

            return content;
        }




        [HttpGet("timelineall")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<TimelineActivities>>> GetTimelineActivityAll()
        {
            return await _context.TimelineActivities
                .Select(x => new TimelineActivities { Id = x.Id, Identifier = x.Identifier, EventContent = x.EventContent, Date = x.Date })
                .OrderBy(x => x.Date)
                .ToListAsync();
        }

        [HttpPut("timeline&{id}")]
        public async Task<IActionResult> PutTimelineActivity(TimelineActivities timelineActivities)
        {
            _context.Entry(timelineActivities).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok("1");
        }

        [HttpPost("timeline")]
        public async Task<ActionResult<TimelineActivities>> PostTimelineActivity(TimelineActivities timelineActivities)
        {
            _context.TimelineActivities.Add(timelineActivities);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTimelineActivity", new { id = timelineActivities.Id }, timelineActivities);
        }

        [HttpDelete("timeline&{id}")]
        public async Task<ActionResult<TimelineActivities>> DeleteTimelineActivity(int id)
        {
            var content = await _context.TimelineActivities.FindAsync(id);
            if (content == null)
            {
                return NotFound();
            }

            _context.TimelineActivities.Remove(content);
            await _context.SaveChangesAsync();

            return content;
        }




        [HttpGet("eventall")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<UpcomingEvents>>> GetUpcomingEventsAll()
        {
            return await _context.UpcomingEvents
                .Select(x => new UpcomingEvents { Id = x.Id, Identifier = x.Identifier, EventContent = x.EventContent, Time = x.Time })
                .ToListAsync();
        }

        [HttpGet("event&iden={iden}")]
        [AllowAnonymous]
        public ActionResult<UpcomingEvents> GetUpcomingEvent(string iden)
        {
            var upcomingEvent = _context.UpcomingEvents.FromSqlInterpolated($"SELECT * FROM [dbo].[UpcomingEvents] WHERE [dbo].[UpcomingEvents].Identifier = {iden}").FirstOrDefault();
            if (upcomingEvent == null)
            {
                return NotFound();
            }

            return upcomingEvent;
        }

        [HttpPut("event&{id}")]
        public async Task<IActionResult> PutUpcomingEvent(UpcomingEvents upcomingEvents)
        {
            _context.Entry(upcomingEvents).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return Ok("1");
        }

        [HttpPost("event")]
        public async Task<ActionResult<UpcomingEvents>> PostUpcomingEvent(UpcomingEvents upcomingEvents)
        {
            _context.UpcomingEvents.Add(upcomingEvents);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUpcomingEvent", new { id = upcomingEvents.Id }, upcomingEvents);
        }

        [HttpDelete("event&{id}")]
        public async Task<ActionResult<UpcomingEvents>> DeleteUpcomingEvent(int id)
        {
            var content = await _context.UpcomingEvents.FindAsync(id);
            if (content == null)
            {
                return NotFound();
            }

            _context.UpcomingEvents.Remove(content);
            await _context.SaveChangesAsync();

            return content;
        }
    }
}
