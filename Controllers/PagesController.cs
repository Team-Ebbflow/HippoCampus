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

        // GET: api/Pages
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PagesTable>>> GetPagesTable()
        {
            return await _context.PagesTable.ToListAsync();
        }

        // GET: api/Pages/page&id={id}
        [HttpGet("page&id={id}")]
        [AllowAnonymous]
        public async Task<ActionResult<PagesTable>> GetPagesTable(int id)
        {
            var pagesTable = await _context.PagesTable.FindAsync(id);

            if (pagesTable == null)
            {
                return NotFound();
            }

            return pagesTable;
        }

        // GET: api/pages/image&id={id}
        [HttpGet("image&id={id}")]
        [AllowAnonymous]
        public async Task<ActionResult<ImageContent>> GetImageContent(int id)
        {
            var imageContent = await _context.ImageContents.FindAsync(id);
            //var imageContent = await _context.ImageContents.FromSqlInterpolated($"SELECT [dbo].[PagesTable].pageID, imageContentID, imageURI, imageDescription FROM [dbo].[ImageContents] INNER JOIN [dbo].[PagesTable] ON [dbo].[PagesTable].pageID = [dbo].[ImageContents].pageID WHERE [dbo].[ImageContents].imageContentID = {id}")

            if (imageContent == null)
            {
                return NotFound();
            }

            return imageContent;
        }

        // GET: api/pages/link&id={id}
        [HttpGet("link&id={id}")]
        [AllowAnonymous]
        public async Task<ActionResult<LinkContent>> GetLinkContent(int id)
        {
            var linkContent = await _context.LinkContents.FindAsync(id);

            if (linkContent == null)
            {
                return NotFound();
            }

            return linkContent;
        }

        // GET: api/pages/text&id={id}
        [HttpGet("text&id={id}")]
        [AllowAnonymous]
        public async Task<ActionResult<TextContent>> GetTextContent(int id)
        {
            var textContent = await _context.TextContents.FindAsync(id);

            if (textContent == null)
            {
                return NotFound();
            }

            return textContent;
        }

        // PUT: api/Pages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPagesTable(int id, PagesTable pagesTable)
        {
            if (id != pagesTable.pageID)
            {
                return BadRequest();
            }

            _context.Entry(pagesTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PagesTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Pages
        [HttpPost]
        public async Task<ActionResult<PagesTable>> PostPagesTable(PagesTable pagesTable)
        {
            _context.PagesTable.Add(pagesTable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPagesTable", new { id = pagesTable.pageID }, pagesTable);
        }

        // DELETE: api/Pages/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PagesTable>> DeletePagesTable(int id)
        {
            var pagesTable = await _context.PagesTable.FindAsync(id);
            if (pagesTable == null)
            {
                return NotFound();
            }

            _context.PagesTable.Remove(pagesTable);
            await _context.SaveChangesAsync();

            return pagesTable;
        }

        private bool PagesTableExists(int id)
        {
            return _context.PagesTable.Any(e => e.pageID == id);
        }
    }
}
