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


        // GET: api/pages/text&iden={iden}
        [HttpGet("text&iden={iden}")]
        [AllowAnonymous]
        public async Task<ActionResult<TextContent>> GetTextContent(string iden)
        {
            var textContent = await _context.TextContents.FindAsync(iden);

            if (textContent == null)
            {
                return NotFound();
            }

            return textContent;
        }
    }
}
