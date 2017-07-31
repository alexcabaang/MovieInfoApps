using System.Collections.Generic;
using Model;

namespace DataLayer
{
    public interface IMovieRepository : IRepository<Movie>
    {
        IEnumerable<Movie> GetTopSellingMovies(int count);
        IEnumerable<Movie> GetTopMoviesActions(int pageIndex, int pageSize);
        Movie Find(int id);
    }
}
