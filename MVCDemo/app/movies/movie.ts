  
export interface IMovie {
     id: number;
     movieName: string;
     movieStar: string;
     description: string;
     releaseDate: Date;
     price: number;
     starRating: number;
     imageUrl: string;
 }

export class Movie {
  constructor(
    id: number,
     movieName: string,
     movieStar: string,
     description: string,
     releaseDate: Date,
     price: number,
     starRating: number,
     imageUrl: string) 
    { }
}

export interface IMovieEvents {
    id?: number;
    EventDescription: string;
    EventDate: Date; 
    Place: string;
    MovieId: number;
}

 