using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;

namespace DataLayer
{
    public interface IMovieEvents : IRepository<MovieEvent>
    {
        IEnumerable<MovieEvent> GetCorrespondingMovie(int id); 
        MovieEvent Find(int id);
    }
}
