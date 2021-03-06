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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var singlemovie_1 = require("../components/singlemovie/singlemovie");
var movies_1 = require("../components/movies/movies");
var forms_1 = require("@angular/forms");
var search_movie_pipe_1 = require("../pipes/search-movie-pipe");
var addmovies_1 = require("../components/addmovies/addmovies");
var MoviesModule = (function () {
    function MoviesModule() {
    }
    MoviesModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [movies_1.MoviesComponent, singlemovie_1.SingleMovieComponent, search_movie_pipe_1.SearchMoviesPipe, addmovies_1.AddMovieComponent],
            bootstrap: [movies_1.MoviesComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesModule);
    return MoviesModule;
}());
exports.MoviesModule = MoviesModule;
//# sourceMappingURL=movie.module.js.map