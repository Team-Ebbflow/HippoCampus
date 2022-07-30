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
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;

namespace HippocampusUON.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = AuthSchemes)]
    public class AdministratorsController : ControllerBase
    {
        private readonly WebAPIDBContext _context;
        // For now we only uses Cookie authentication as it's simpler, for enhanced security can use JWT or OAUTH
        private const string AuthSchemes =
            CookieAuthenticationDefaults.AuthenticationScheme;

        public AdministratorsController(WebAPIDBContext context)
        {
            _context = context;
        }

        // GET: api/Administrators
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Administrator>>> GetAdministrators()
        {
            return await _context.Administrators
                .Select(x => new Administrator { adminId = x.adminId, adminEmail = x.adminEmail, adminFirstName = x.adminFirstName, adminLastName = x.adminLastName, adminMobile = x.adminMobile})
                .ToListAsync();
        }

        // GET: api/Administrators/email={email}&password={password}
        // return: 1: Login Successful, -1: Password Incorrect, -2: User not existing 
        [HttpGet("email={email}&password={password}")]
        [AllowAnonymous]
        public async Task<ActionResult> LoginAdmin(string email, string password)
        {
            Administrator admin = await _context.Administrators.SingleOrDefaultAsync(x => x.adminEmail == email);
            if (admin == null)
            {
                return ValidationProblem("The user does not exist"); 
            }

            if (password != admin.adminPassword)
            {
                return ValidationProblem("Password incorrect");
            }

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, admin.adminEmail),
                new Claim("FullName", admin.adminFirstName + " " + admin.adminLastName),
                new Claim(ClaimTypes.Role, "Administrator"),
            };

            var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

            await HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(claimsIdentity));

            return Ok("1");
        }

        // PUT: api/Administrators/5
        // return: 1: Update successful, -1: input adminId is missing or not same as in the HttpPut call, -2: the id does not exist
        [HttpPut("{id}")]
        public async Task<ActionResult> PutAdministrator(Administrator administrator)
        {
            var password = await _context.Administrators.AsNoTracking().FirstOrDefaultAsync(x => x.adminId == administrator.adminId);
            administrator.adminPassword = password.adminPassword;

            _context.Entry(administrator).State = EntityState.Modified;

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

        // POST: api/Administrators
        [HttpPost]
        public async Task<ActionResult> PostAdministrator(Administrator administrator)
        {
            administrator.adminPassword = administrator.adminLastName + administrator.adminMobile;
            _context.Administrators.Add(administrator);
            await _context.SaveChangesAsync();

            return Ok("1");
        }

        // DELETE: api/Administrators/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> DeleteAdministrator(int id)
        {
            var administrator = await _context.Administrators.FindAsync(id);
            if (administrator == null)
            {
                return Problem("The adminId doesn't exist", statusCode: 420);
            }

            _context.Administrators.Remove(administrator);
            await _context.SaveChangesAsync();

            return Ok("1");
        }

        // Get current login status: api/Administrators/login_status
        [HttpGet("login_status")]
        [AllowAnonymous]
        public ActionResult<bool> IsAdministrator()
        {
            return HttpContext.User.Identity.IsAuthenticated;
        }
    }
}
