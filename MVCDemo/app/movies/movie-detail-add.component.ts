import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';  
import { Subscription }  from 'rxjs/Subscription';  
import { ActivatedRoute, Router } from '@angular/router';  
import { MovieService } from './movie.service'; 
import { IMovie, Movie } from './movie'; 

@Component({
    templateUrl: 'app/movies/movie-detail-add.component.html'
})

export class MovieDetailAddComponent  {
    pageTitle: string = 'Movie Detail!';
    movie: IMovie[] = [];   
    movies: IMovie[] = [];    
    tempdata = {
            id: 0,
            movieName: 'ABC',
            movieStar: 'bbbb',
            description: 'ccc',
            releaseDate: new Date("March 15, 2015 12:30:00"),
            price: 5,
            starRating: 3.5,
            imageUrl: 'bla bla bla' 
        };

    errorMessage: string;
    private sub: Subscription;
    sharedMoviesSubscription: Subscription;

    constructor(private route: ActivatedRoute,
        private router: Router, 
        private _movieService: MovieService) {
    }

    ngOnInit(): void {
        this.sharedMoviesSubscription = this._movieService.sharedMovies$
        .subscribe(movies => this.movies = movies);
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getMovie(62);   // known for existing record used as template
            }); 
    }   
        
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getMovie(id: number) {
        this._movieService.getSpecificMovie(id).subscribe(
            (movie:IMovie[]) => { this.movie = movie; },           
        error => {this.errorMessage = 'Failed in getting specific movie...'});
    }

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

    onInserting(movie: IMovie){
        if (this.movies.length === 0){
            this._movieService.getAllMovies().subscribe(
                (movies: IMovie[]) => {
                    this.movies = movies;
                });
        }
        this._movieService.createMovie(movie)
            .then(movie => {
                this.movies = [movie, ...this.movies];
                console.log('Movie added to list.... ' + this.movies.length + "***" + JSON.stringify(this.movies)); 
                this._movieService.setSharedMovies(this.movies);
                this.router.navigate(['/movies']); 
            })                        
    }

    onBack(): void {
        this.router.navigate(['/movies']);
    }
}