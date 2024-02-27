using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project_LMS.Models;
using static System.Reflection.Metadata.BlobBuilder;

namespace project_LMS.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class ViewBookController : ControllerBase
    {
        [HttpGet]

        public List<Book> GetInfo()
        {

            List<Book> list = new List<Book>();
            using (var db = new testContext())
            {
                list = db.Books.ToList();

            }
            return list;
        }
        [HttpGet]
        public IActionResult GetUser([FromQuery] int id) {
            using (var db=new testContext())
            {
                var user=db.Users
                    .Where(u=>u.LoginId==id)
                    .FirstOrDefault();
                
                if(user==null)
                {
                    return NotFound();
                }
                 
                
                    return Ok(user);
                
            }
          
        }

    }
}


