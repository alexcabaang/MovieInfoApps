import {Injectable} from '@angular/core';
import { IMovie, IMovieEvents } from './movie';
import {Http, Response, Headers, HTTP_PROVIDERS, Request, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { ConfigService } from './../shared/api_settings/config.service';

@Injectable()
export class MovieService {
    private _movieUrl = '../api/moviemodels';
    private _movieEventsUrl = '../api/movieEvents';
    movies: IMovie[] = []; 

    sharedMovies: IMovie[] = [];
    private _sharedMoviesBS = new BehaviorSubject<IMovie[]>([]);
    sharedMovies$ = this._sharedMoviesBS.asObservable();

    private headers = new Headers({ 'Content-Type':'application/json',  
                                    'Accept':'application/json', 
                                    'Access-Control-Allow-Origin':'*',
                                    'Access-Control-Allow-Methods':'POST, GET, DELETE, PUT, OPTIONS'});
    constructor(private _http: Http) {
            this.sharedMovies = [];
            this._sharedMoviesBS.next(this.sharedMovies);        
    }

    setSharedMovies(movies: IMovie[]){
        this.sharedMovies = movies;
        this._sharedMoviesBS.next(this.sharedMovies);
    }

    getAllMovies():Observable<IMovie[]>{
        return this._http.get(this._movieUrl)
        .map(response => response.json());
    }
         
    private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';
        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }
 
    getMovie(id: number): Observable<IMovie[]> {
        return this._http.get(this._movieUrl) 
            .map((response: Response) => <IMovie[]>response.json())
    }

    getSpecificMovie(id: number): Observable<IMovie[]> {
          return this._http.get(this._movieUrl + '/' + id)
            .do(data => console.log("Movie: " + JSON.stringify(data)))
            .map((response: Response) => <IMovie>response.json())
            .catch(this.handleError);
    }
    
    updateMovie(movie: IMovie): Observable<IMovie> {
        console.log("Movie: " + JSON.stringify(movie));
        return this._http.put(this._movieUrl + '/' + movie.id, JSON.stringify(movie), {
            headers: this.headers
        })
            .map((response: Response) => <IMovie>response.json())          
            .catch(this.handleError);
    }

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

    createMovie(movie: IMovie): Promise<IMovie> {
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
            .toPromise()
            .then(response => <IMovie>response.json())
            .catch(this.handleError)
    }

    deleteMovie(id:number): Observable<IMovie> {
        return this._http.delete(this._movieUrl + '/' + id)        
            .map((response: Response) => <IMovie>response.json())
            .do(data => console.log("Movie: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getMovieEvents(id:number): Observable<IMovieEvents[]>{
        return this._http.get(this._movieEventsUrl + '/'+ id) 
            .do(data => console.log("MovieEvents: " + JSON.stringify(data)))
            .map((response: Response) => <IMovieEvents[]>response.json())
            .catch(this.handleError);
        }

}
