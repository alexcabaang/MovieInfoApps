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
var MovieDetailDeleteComponent = (function () {
    function MovieDetailDeleteComponent(route, router, _movieService) {
        this.route = route;
        this.router = router;
        this._movieService = _movieService;
        this.pageTitle = 'Movie Detail!';
        this.movie = [];
        this.movies = [];
    }
    MovieDetailDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getMovie(id);
        });
    };
    MovieDetailDeleteComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MovieDetailDeleteComponent.prototype.getMovie = function (id) {
        var _this = this;
        this._movieService.getSpecificMovie(id).subscribe(function (movie) {
            _this.movie = movie;
        }, function (error) { _this.errorMessage = 'Failed while trying to load movie details'; });
    };
    MovieDetailDeleteComponent.prototype.onBack = function () {
        this.router.navigate(['/movies']);
    };
    MovieDetailDeleteComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Movie Detail: ' + message;
    };
    MovieDetailDeleteComponent.prototype.onDeleting = function (id) {
        var _this = this;
        this._movieService.getAllMovies().subscribe(function (movies) {
            _this.movies = movies;
        });
        this._movieService.deleteMovie(id).subscribe(function (movie) {
            _this.movies.forEach(function (m, i) {
                if (m.id === id) {
                    _this.movies.splice(i, 1);
                }
            });
            _this._movieService.setSharedMovies(_this.movies);
            console.log('Movie deleted.... ' + movie);
            _this.router.navigate(['/movies']);
        });
    };
    return MovieDetailDeleteComponent;
}());
MovieDetailDeleteComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/movies/movie-detail-delete.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        movie_service_1.MovieService])
], MovieDetailDeleteComponent);
exports.MovieDetailDeleteComponent = MovieDetailDeleteComponent;
//# sourceMappingURL=movie-detail-delete.component.js.map