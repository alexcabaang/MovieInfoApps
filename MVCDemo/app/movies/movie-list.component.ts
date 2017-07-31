import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit} from '@angular/core'; 
import { IMovie, IMovieEvents } from './movie'; 
import {MovieFilterPipe} from './movie-filter.pipe'; 
import {ReviewComponent} from '../shared/review.component'; 
import {MovieService} from './movie.service'; 

@Component({
    selector: 'mm-movies',
    templateUrl: 'app/movies/movie-list.component.html',
    styleUrls: ['app/movies/movie-list.component.css'],
    pipes: [MovieFilterPipe],
    directives: [ReviewComponent]
})

export class MovieListComponent implements OnInit{
    pageTitle: string = 'Movie List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    seePoster: boolean = true;
    listFilter: string;
    errorMessage: string;
    movies: IMovie[] = [];
    movieEvents: IMovieEvents[] = [];
    //isDisplay: boolean = false;

    sharedMoviesSubscription: Subscription;
    sharedMovies: IMovie[] = [];

    constructor(private _movieService: MovieService) {
    }

    ngOnInit(): void {
        this.sharedMoviesSubscription = this._movieService.sharedMovies$
        .subscribe(movies => this.movies = movies);
        if (this.movies.length === 0){
            this._movieService.getAllMovies().subscribe(
                (movies: IMovie[]) => {
                    this.movies = movies;
                });
        }
    }

    toggleImage(): void {
        this.seePoster = !this.seePoster;
    } 

    onRatingClicked(message: string): void {
        this.pageTitle = 'Movie List: ' + message;
    }

    onDeleting(id:number) {
         this._movieService.deleteMovie(id).subscribe((movie:IMovie)=>{
             console.log(movie);      
        })                 
    }

    onGettingMovieEvents(id:number){
        this._movieService.getMovieEvents(id).subscribe((movieEvents:IMovieEvents[])=>{
            console.log(movieEvents);
            this.movieEvents = movieEvents;
        })
    }

}