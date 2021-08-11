using System;
using System.Collections.Generic;

#nullable disable

namespace Project2.Models
{
    public partial class Homelist
    {
        public Homelist()
        {
            Homelisttitles = new HashSet<Homelisttitle>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Img { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual ICollection<Homelisttitle> Homelisttitles { get; set; }
    }
}
