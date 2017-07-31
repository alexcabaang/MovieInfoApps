using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using DataLayer;
using Model;

namespace MVCDemo.Controllers
{
    public class MoviesController : Controller
    {

        private readonly IUnitofWork _unitofWork;

        public MoviesController(IUnitofWork unitofWork)
        {
            _unitofWork = unitofWork;
        }

        public List<Movie> Index()
        {
            return _unitofWork.Movies.GetAll().ToList();
        }
    }
}