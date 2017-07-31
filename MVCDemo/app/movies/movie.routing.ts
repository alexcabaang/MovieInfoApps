import { MovieDetailDeleteComponent } from './movie-detail-delete.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { MovieListComponent } from './movie-list.component';
import { MovieDetailEditComponent } from './movie-detail-edit.component'; 
import { MovieDetailAddComponent } from './movie-detail-add.component'; 

export const movieRoutes: Routes = [
    { path: 'movies', component: MovieListComponent },
    { path: 'movieEdit/:id', component: MovieDetailEditComponent }, 
    { path: 'movieAdd', component: MovieDetailAddComponent },
    { path: 'movieDelete/:id', component: MovieDetailDeleteComponent}
];

export const movieRouting: ModuleWithProviders = RouterModule.forChild(movieRoutes);