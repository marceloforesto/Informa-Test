using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Album
    {
        public int AlbumId { get; set; }

        public string AlbumName { get; set; }

        public string AlbumYear { get; set; }

        public string AlbumImage { get; set; }

        public int ArtistId { get; set; }
    }
}
