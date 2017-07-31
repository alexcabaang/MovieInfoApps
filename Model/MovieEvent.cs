using System;

namespace Model
{
    public class MovieEvent
    {
        public int Id { get; set; }
        public string EventDescription { get; set; }
        public DateTime? EventDate { get; set; }   
        public string Place { get; set; }
        public int MovieId { get; set; }
        public Movie Movie { get; set; }
    }
}
