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
var core_1 = require("@angular/core");
var movie_1 = require("../../classes/movie");
var MoviesComponent = (function () {
    function MoviesComponent() {
        this.movies = [
            new movie_1.Movie("El secreto de Amila", "Animación", "España", "Gorka Vázquez", new Date("2015-12-23")),
            new movie_1.Movie("Carlitos y Snoopy: la película de Peanuts", "Animación, Aventuras", "USA", "Steve Martino", new Date("2015-12-25")),
            new movie_1.Movie("El Desafío", "Drama, Biopic", "USA", "Robert Zemeckis", new Date("2015-12-25")),
            new movie_1.Movie("Hermanísimas", "Drama", "Francia", "Lucie Borleteau", new Date("2015-12-25")),
            new movie_1.Movie("La Odisea de Alice", "Animación, Aventuras", "USA", "Steve Martino", new Date("2015-12-25")),
            new movie_1.Movie("Macbeth", "Drama", "Reino Unido. Francia, USA", "Justin Kurzel", new Date("2015-12-25")),
            new movie_1.Movie("Navidades, ¿Bien o en familia?", "Comedia", "USA", "Jessie Nelson", new Date("2015-12-25")),
            new movie_1.Movie("Palmeras en la nieve", "Drama", "España", "Fernando González Molina", new Date("2015-12-25"))
        ];
    }
    MoviesComponent = __decorate([
        core_1.Component({
            selector: "app-movies",
            templateUrl: "./app/components/movies/movies.html"
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesComponent);
    return MoviesComponent;
}());
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.js.map