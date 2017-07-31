using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;
using DataLayer;
using Model;

namespace MVCDemo.Controllers
{
    public class MovieEventsController : ApiController
    {
        private readonly IUnitofWork _unitofWork;

        public MovieEventsController(IUnitofWork unitofWork)
        {
            _unitofWork = unitofWork;
        }

        [HttpGet]
        [ResponseType(typeof(MovieEvent))]
        public List<MovieEvent> GetMovieEvents(int id)
        {
            return _unitofWork.MovieEvents.GetCorrespondingMovie(id).ToList();
        }

    }
}