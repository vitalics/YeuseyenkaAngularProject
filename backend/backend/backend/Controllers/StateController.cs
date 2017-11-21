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
    public class StateController : Controller
    {
        Collection<ItemState> _items;
        public StateModel _state;
        public StateController()
        {
            _items =  new Collection<ItemState>();
            _state = new StateModel();
            _state.router = new RouterState { path="" };
            _state.ui = new UIState { showSidebar = true };
            _state.items = _items;
        }
       
            
        // GET api/state
        [HttpGet]
        public StateModel Get()
        {
            return _state;
        }
        // POST api/state
        [HttpPost]
        public StateModel Post([FromBody]StateModel newState)
        {
            _state = newState;
            return _state;
        }
    }
}