using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net.Http.Headers;
using Model;

namespace DataLayer
{
    public class MovieRepository : Repository<Movie>, IMovieRepository
    {
        public MovieRepository(MovieContext context) 
            : base(context)
        {            
        }

        public IEnumerable<Movie> GetTopSellingMovies(int count)
        {
            return MovieContext.Movies.OrderByDescending(m => m.StarRating).Take(count).ToList();
        }

        public IEnumerable<Movie> GetTopMoviesActions(int pageIndex, int pageSize = 10)
        {
            return MovieContext.Movies
                .OrderBy(m => m.MovieName)
                .Skip((pageIndex - 1)*pageSize)
                .Take(pageSize)
                .ToList();
        }

        public Movie Find(int id)
        {
            return MovieContext.Movies.Find(id);
        }

        public MovieContext MovieContext
        {
            get { return Context as MovieContext;}
        }

    }
}
