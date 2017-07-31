import { Component } from '@angular/core'; 
import { Subscription }       from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from './movie.service';
import { IMovie } from './movie';

@Component({
    templateUrl: 'app/movies/movie-detail-delete.component.html'
})

export class MovieDetailDeleteComponent  {
    pageTitle: string = 'Movie Detail!';
    movie: IMovie[] = [];
    movies: IMovie[] = [];
    errorMessage: string;
    private sub: Subscription;

    constructor(private route: ActivatedRoute,
        private router: Router, 
        private _movieService: MovieService) {
    }

    ngOnInit(): void {
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

    onDeleting(id:number) {
        this._movieService.getAllMovies().subscribe(
            (movies: IMovie[]) => {
            this.movies = movies;
            });
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