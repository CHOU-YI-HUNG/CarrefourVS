using System;
using System.Collections.Generic;

#nullable disable

namespace Project2.Models
{
    public partial class Homelistitem
    {
        public Homelistitem()
        {
            Products = new HashSet<Product>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int? HomeListTitleId { get; set; }

        public virtual Homelisttitle HomeListTitle { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
