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

        // GET: api/Pages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PagesTable>> GetPagesTable(int id)
        {
            var pagesTable = await _context.PagesTable.FindAsync(id);

            if (pagesTable == null)
            {
                return NotFound();
            }

            return pagesTable;
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
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
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
