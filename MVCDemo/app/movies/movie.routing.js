"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movie_detail_delete_component_1 = require("./movie-detail-delete.component");
var router_1 = require("@angular/router");
var movie_list_component_1 = require("./movie-list.component");
var movie_detail_edit_component_1 = require("./movie-detail-edit.component");
var movie_detail_add_component_1 = require("./movie-detail-add.component");
exports.movieRoutes = [
    { path: 'movies', component: movie_list_component_1.MovieListComponent },
    { path: 'movieEdit/:id', component: movie_detail_edit_component_1.MovieDetailEditComponent },
    { path: 'movieAdd', component: movie_detail_add_component_1.MovieDetailAddComponent },
    { path: 'movieDelete/:id', component: movie_detail_delete_component_1.MovieDetailDeleteComponent }
];
exports.movieRouting = router_1.RouterModule.forChild(exports.movieRoutes);
//# sourceMappingURL=movie.routing.js.map