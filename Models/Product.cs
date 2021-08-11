using System;
using System.Collections.Generic;

#nullable disable

namespace Project2.Models
{
    public partial class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public string Img { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpatedAt { get; set; }
        public int? HomeListItemId { get; set; }
        public int? HomeListTitleId { get; set; }

        public virtual Homelistitem HomeListItem { get; set; }
        public virtual Homelisttitle HomeListTitle { get; set; }
    }
}
