
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using DataLayer;
using Model;

namespace MVCDemo.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MovieModelsController : ApiController
    {
        private readonly IUnitofWork _unitofWork;

        public MovieModelsController(IUnitofWork unitofWork)
        {
            _unitofWork = unitofWork;
        }

        // GET: api/MovieModels
        [HttpGet]
        public List<Movie> GetMovies()
        {
            return _unitofWork.Movies.GetAll().ToList();
        }

        // GET: api/MovieEvents
        [HttpGet]
        [Route("Events")]
        [ResponseType(typeof(MovieEvent))]
        public List<MovieEvent> GetMovieEvents(int id)
        {
            return _unitofWork.MovieEvents.GetCorrespondingMovie(id).ToList();
        }

        // GET: api/MovieModels/5
        [ResponseType(typeof(Movie))]
        public IHttpActionResult GetMovieModel(int id)
        {
            Movie movie  = _unitofWork.Movies.Find(id);
            if (movie == null)
            {
                return NotFound();
            }

            //IList<MovieEvent>movieEvents = _unitofWork.MovieEvents.GetCorrespondingMovie(id).ToList();
            //movie.MovieEvents = movieEvents;

            return Ok(movie);
        }

        // PUT: api/MovieModels/5
        [HttpPut]
        //[ResponseType(typeof(void))]
        [ResponseType(typeof(Movie))]
        public IHttpActionResult PutMovieModel(int id, Movie movie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != movie.Id)
            {
                return BadRequest();
            }

            _unitofWork.Movies.Update(movie);
            _unitofWork.Complete();

            //return StatusCode(HttpStatusCode.NoContent);
            return Ok(movie);
        }

        // POST: api/MovieModels
        [ResponseType(typeof(Movie))]
        public IHttpActionResult PostMovieModel(Movie movie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _unitofWork.Movies.Add(movie);
            _unitofWork.Complete();
            return CreatedAtRoute("DefaultApi", new { id = movie.Id }, movie);
        }

        // DELETE: api/MovieModels/5     
        [ResponseType(typeof(Movie))]
        [AcceptVerbs("DELETE")]
        public IHttpActionResult DeleteMovieModel(int id)
        {
            Movie movie = _unitofWork.Movies.Find(id);
            if (movie == null)
            {
                return NotFound();
            }
            _unitofWork.Movies.Remove(movie);
            _unitofWork.Complete();
            return Ok(movie);
        }


    }
}