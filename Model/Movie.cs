using System;
using System.Collections;
using System.Collections.Generic;

namespace Model
{
    public class Movie
    {
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string MovieStar { get; set; }
        public string Description { get; set; }
        public DateTime ReleaseDate { get; set; }
        public decimal Price { get; set; }
        public decimal StarRating { get; set; }
        public string ImageUrl { get; set; }
        //public int? MovieEventId { get; set; }
        public IList<Artist>Artists { get; set; }
        public IList<MovieEvent>MovieEvents { get; set; }

    }
}
