using System;
using System.Collections.Generic;

#nullable disable

namespace Project2.Models
{
    public partial class Homelisttitle
    {
        public Homelisttitle()
        {
            Homelistitems = new HashSet<Homelistitem>();
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int? HomeListId { get; set; }

        public virtual Homelist HomeList { get; set; }
        public virtual ICollection<Homelistitem> Homelistitems { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
