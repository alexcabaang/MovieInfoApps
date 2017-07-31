using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;

namespace Model
{
    public class Artist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string BirthPlace { get; set; }  
        public IList<Movie>Movies { get; set; }
    }
}
