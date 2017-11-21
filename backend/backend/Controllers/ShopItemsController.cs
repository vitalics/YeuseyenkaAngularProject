using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System.Collections.ObjectModel;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class ShopItemsController : Controller
    {
        Collection<Models.ItemState> MockModel = new Collection<Models.ItemState>
            {
                new ItemState {Id= 1,Title = "test title"},
                new ItemState { Id = 2, Title = "test title 2" }
            };
        // GET api/shopitems
        [HttpGet]
        public ICollection<Models.ItemState> Get()
        {
            return MockModel;
        }

        // GET api/shopitems/1
        [HttpGet("{id}")]
        public Models.ItemState Get(int id)
        {
            //Models.Item SearchableItem = null;
            return MockModel.FirstOrDefault(item => item.Id == id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
