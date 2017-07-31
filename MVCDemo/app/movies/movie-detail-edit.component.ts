import { Component, Input, Output } from '@angular/core'; 
import { Subscription }       from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './movie.service';
import { IMovie } from './movie';

@Component({
    templateUrl: 'app/movies/movie-detail-edit.component.html'
})

export class MovieDetailEditComponent  {
    pageTitle: string = 'Movie Detail!';
    movie: IMovie[] = [];
    movies: IMovie[] = [];
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
                this.getMovie(id);
            });    
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getMovie(id: number) {
        this._movieService.getSpecificMovie(id).subscribe((movie:IMovie[]) => {
            this.movie = movie;    
        },             
        error => {this.errorMessage = 'Failed while trying to load movie details'});
    }

    onBack(): void {
         this.router.navigate(['/movies']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Movie Detail: ' + message;
    }

    onUpdating(movie:IMovie){
        if (this.movies.length === 0){
            this._movieService.getAllMovies().subscribe(
                (movies: IMovie[]) => {
                    this.movies = movies;
                });
        }      
        this._movieService.updateMovie(movie).subscribe(
            (movie: IMovie) => {
            this.movies.forEach((m,i)=>{
            //   if (m.id === movie.id) {
            //       this.movies[i] = movie;
            //   }
            if (m.id === movie.id) {this.movies.splice(i,1);}
            });
            this.movies = [movie, ...this.movies];
            console.log('Movie updated.... ' + movie);   
            this._movieService.setSharedMovies(this.movies);
            this.router.navigate(['/movies']);    
            }
        );
    }

    onDeleting(id:number) {
        if (this.movies.length === 0){
            this._movieService.getAllMovies().subscribe(
                (movies: IMovie[]) => {
                    this.movies = movies;
                });
        }  
        this._movieService.deleteMovie(id).subscribe((movie:IMovie)=>{
            this.movies.forEach((m,i)=>{
                if (m.id ===id) {this.movies.splice(i,1);}
            })
            this._movieService.setSharedMovies(this.movies);
            console.log('Movie deleted.... ' + movie);   
            this.router.navigate(['/movies']);   
        })       
    }
}