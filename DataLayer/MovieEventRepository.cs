using System.Collections.Generic;
using System.Linq;
using Model;

namespace DataLayer
{
    public class MovieEventRepository : Repository<MovieEvent>, IMovieEvents
    {

        public MovieEventRepository(MovieContext context)
            : base(context)
        {
        }

        public MovieEvent Find(int id)
        {
            return MovieContext.MovieEvents.Find(id);
        }

        public IEnumerable<MovieEvent> GetCorrespondingMovie(int id)
        {
            return MovieContext.MovieEvents
                .OrderBy(e => e.Id)
                .Where(e => e.MovieId == id)
                .ToList();
        }

        public MovieContext MovieContext
        {
            get { return Context as MovieContext; }
        }
    }
}
