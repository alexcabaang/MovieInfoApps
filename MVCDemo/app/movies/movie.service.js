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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var MovieService = (function () {
    function MovieService(_http) {
        this._http = _http;
        this._movieUrl = '../api/moviemodels';
        this._movieEventsUrl = '../api/movieEvents';
        this.movies = [];
        this.sharedMovies = [];
        this._sharedMoviesBS = new BehaviorSubject_1.BehaviorSubject([]);
        this.sharedMovies$ = this._sharedMoviesBS.asObservable();
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT, OPTIONS' });
        this.sharedMovies = [];
        this._sharedMoviesBS.next(this.sharedMovies);
    }
    MovieService.prototype.setSharedMovies = function (movies) {
        this.sharedMovies = movies;
        this._sharedMoviesBS.next(this.sharedMovies);
    };
    MovieService.prototype.getAllMovies = function () {
        return this._http.get(this._movieUrl)
            .map(function (response) { return response.json(); });
    };
    MovieService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors = '';
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable_1.Observable.throw(applicationError || modelStateErrors || 'Server error');
    };
    MovieService.prototype.getMovie = function (id) {
        return this._http.get(this._movieUrl)
            .map(function (response) { return response.json(); });
    };
    MovieService.prototype.getSpecificMovie = function (id) {
        return this._http.get(this._movieUrl + '/' + id)
            .do(function (data) { return console.log("Movie: " + JSON.stringify(data)); })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.updateMovie = function (movie) {
        console.log("Movie: " + JSON.stringify(movie));
        return this._http.put(this._movieUrl + '/' + movie.id, JSON.stringify(movie), {
            headers: this.headers
        })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /*
    createMovie(movie: IMovie): Observable<IMovie> {
        let body = JSON.stringify({
            movieName: movie.movieName,
            movieStar: movie.movieStar,
            description: movie.description,
            releaseDate: movie.releaseDate,
            price: movie.price,
            starRating: movie.starRating,
            imageUrl: movie.imageUrl
        });
        return this._http.post(this._movieUrl + '/', body, { headers: this.headers })
            .map((response: Response) => { response.json().data as IMovie })
            .catch(this.handleError)
    }
    */
    MovieService.prototype.createMovie = function (movie) {
        var body = JSON.stringify({
            movieName: movie.movieName,
            movieStar: movie.movieStar,
            description: movie.description,
            releaseDate: movie.releaseDate,
            price: movie.price,
            starRating: movie.starRating,
            imageUrl: movie.imageUrl
        });
        return this._http.post(this._movieUrl + '/', body, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MovieService.prototype.deleteMovie = function (id) {
        return this._http.delete(this._movieUrl + '/' + id)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("Movie: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MovieService.prototype.getMovieEvents = function (id) {
        return this._http.get(this._movieEventsUrl + '/' + id)
            .do(function (data) { return console.log("MovieEvents: " + JSON.stringify(data)); })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map