using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Track
    {
        public int TrackId { get; set; }

        public string TrackName { get; set; }

        public int TrackYear { get; set; }

        public int TrackStyle { get; set; }

        public decimal TrackTime { get; set; }

        public int AlbumId { get; set; }
    }
}
