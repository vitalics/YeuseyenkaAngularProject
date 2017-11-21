using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class StateModel
    {
        public RouterState router { get; set; }
        public UIState ui { get; set; }
        public Collection<ItemState> items { get; set; }
    }
}
