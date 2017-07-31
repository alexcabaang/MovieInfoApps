
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
    [EnableCors(origins: "http://localhost:4180", headers: "*", methods: "*", SupportsCredentials = true)]
    public class MovieModelsController : ApiController
    {
        private GenericRepository<MovieModel>  Rep = new GenericRepository<MovieModel>();

        // GET: api/MovieModels
        //public IQueryable<MovieModel> GetMovies()
        public List<MovieModel> GetMovies()
        {
            // return db.Movies;
            return Rep.GetAll().ToList();
        }

        // GET: api/MovieModels/5
        [ResponseType(typeof(MovieModel))]
        public IHttpActionResult GetMovieModel(int id)
        {
            //MovieModel movieModel = db.Movies.Find(id);
            MovieModel movieModel = Rep.GetById(id);
            if (movieModel == null)
            {
                return NotFound();
            }

            return Ok(movieModel);
        }

        // PUT: api/MovieModels/5
        [HttpPut]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMovieModel(int id, MovieModel movieModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != movieModel.MovieId)
            {
                return BadRequest();
            }

            /*
            db.Entry(movieModel).State = EntityState.Modified;
            
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovieModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            */

            Rep.Update(movieModel); 

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/MovieModels
        [ResponseType(typeof(MovieModel))]
        public IHttpActionResult PostMovieModel(MovieModel movieModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            /*
            db.Movies.Add(movieModel);
            db.SaveChanges();
            */

            Rep.Insert(movieModel);

            return CreatedAtRoute("DefaultApi", new { id = movieModel.MovieId }, movieModel);
        }

        // DELETE: api/MovieModels/5        
        [ResponseType(typeof(MovieModel))]
        [HttpDelete]
        public IHttpActionResult DeleteMovieModel(int id)
        {
            // MovieModel movieModel = db.Movies.Find(id);
            MovieModel movieModel = Rep.GetById(id);
            if (movieModel == null)
            {
                return NotFound();
            }
            /*
            db.Movies.Remove(movieModel);
            db.SaveChanges();
            */
            Rep.Delete(movieModel);
            return Ok(movieModel);
        }

        /*
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        /*
        private bool MovieModelExists(int id)
        {
            return db.Movies.Count(e => e.MovieId == id) > 0;
        }
        */
    }
}