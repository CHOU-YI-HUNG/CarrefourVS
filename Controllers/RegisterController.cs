using Microsoft.AspNetCore.Mvc;
using Project2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BC = BCrypt.Net.BCrypt;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {

        private readonly CarrefourContext _carrefourContext;

        public RegisterController(CarrefourContext carrefourContext)
        {
            _carrefourContext = carrefourContext;
        }

        // GET: api/<RegisterController>
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _carrefourContext.Users;
        }

        // GET api/<RegisterController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<RegisterController>
        [HttpPost]
        public string Post([FromBody] User value)
        {
            User insert = new User
            {
                Username = value.Username,
                Password = BC.HashPassword(value.Password),
                Phone = value.Phone,
                Email = value.Email,
                Birthday = value.Birthday,
                CreatedAt = DateTime.Now,
                UpdateAt = DateTime.Now
            };


            _carrefourContext.Users.Add(insert);
            _carrefourContext.SaveChanges();

            return "ok";
        }

        // PUT api/<RegisterController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RegisterController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
