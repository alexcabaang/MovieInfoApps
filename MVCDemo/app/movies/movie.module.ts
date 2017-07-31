import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieDetailEditComponent} from './movie-detail-edit.component';
import { MovieDetailAddComponent} from './movie-detail-add.component';

import { MovieFilterPipe } from './movie-filter.pipe';
import { MovieService } from './movie.service';
import { movieRouting } from './movie.routing';

import { SharedModule } from '../shared/shared.module';

@NgModule({ 
    imports: [
        CommonModule,
        FormsModule,
        movieRouting
    ],
    declarations: [
        MovieListComponent,
        MovieDetailComponent,
        MovieDetailEditComponent,
        MovieDetailAddComponent,
        MovieFilterPipe
    ],
    providers: [
        MovieService 
    ]
})
export class MovieModule { } 