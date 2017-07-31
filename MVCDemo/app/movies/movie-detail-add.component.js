"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var movie_service_1 = require("./movie.service");
var MovieDetailAddComponent = (function () {
    function MovieDetailAddComponent(route, router, _movieService) {
        this.route = route;
        this.router = router;
        this._movieService = _movieService;
        this.pageTitle = 'Movie Detail!';
        this.movie = [];
        this.movies = [];
        this.tempdata = {
            id: 0,
            movieName: 'ABC',
            movieStar: 'bbbb',
            description: 'ccc',
            releaseDate: new Date("March 15, 2015 12:30:00"),
            price: 5,
            starRating: 3.5,
            imageUrl: 'bla bla bla'
        };
    }
    MovieDetailAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedMoviesSubscription = this._movieService.sharedMovies$
            .subscribe(function (movies) { return _this.movies = movies; });
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getMovie(62); // known for existing record used as template
        });
    };
    MovieDetailAddComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MovieDetailAddComponent.prototype.getMovie = function (id) {
        var _this = this;
        this._movieService.getSpecificMovie(id).subscribe(function (movie) { _this.movie = movie; }, function (error) { _this.errorMessage = 'Failed in getting specific movie...'; });
    };
    /*
    onInserting(movie: IMovie){
        this._movieService.getAllMovies().subscribe(
            (movies:IMovie[])=>{ this.movies = movies });
        this._movieService.createMovie(movie).subscribe(
            (movie:IMovie)=>{
                this.movies = [movie as IMovie, ...this.movies];
                console.log(JSON.stringify(movie as IMovie));
                //console.log('Movie added to list.... ' + this.movies.length + "***" + JSON.stringify(this.movies));
                this._movieService.setSharedMovies(this.movies);
                this.router.navigate(['/movies']);
            }
        )
    }
    */
    MovieDetailAddComponent.prototype.onInserting = function (movie) {
        var _this = this;
        if (this.movies.length === 0) {
            this._movieService.getAllMovies().subscribe(function (movies) {
                _this.movies = movies;
            });
        }
        this._movieService.createMovie(movie)
            .then(function (movie) {
            _this.movies = [movie].concat(_this.movies);
            console.log('Movie added to list.... ' + _this.movies.length + "***" + JSON.stringify(_this.movies));
            _this._movieService.setSharedMovies(_this.movies);
            _this.router.navigate(['/movies']);
        });
    };
    MovieDetailAddComponent.prototype.onBack = function () {
        this.router.navigate(['/movies']);
    };
    return MovieDetailAddComponent;
}());
MovieDetailAddComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/movies/movie-detail-add.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        movie_service_1.MovieService])
], MovieDetailAddComponent);
exports.MovieDetailAddComponent = MovieDetailAddComponent;
//# sourceMappingURL=movie-detail-add.component.js.map