"use strict";
var movie_1 = require("../classes/movie");
var MoviesService = (function () {
    function MoviesService() {
    }
    MoviesService.prototype.get = function () {
        return this.movies = [
            new movie_1.Movie("El secreto de Amila", "Animación", "España", "Gorka Vázquez", new Date("2015-12-23")),
            new movie_1.Movie("Carlitos y Snoopy: la película de Peanuts", "Animación, Aventuras", "USA", "Steve Martino", new Date("2015-12-25")),
            new movie_1.Movie("El Desafío", "Drama, Biopic", "USA", "Robert Zemeckis", new Date("2015-12-25")),
            new movie_1.Movie("Hermanísimas", "Drama", "Francia", "Lucie Borleteau", new Date("2015-12-25")),
            new movie_1.Movie("La Odisea de Alice", "Animación, Aventuras", "USA", "Steve Martino", new Date("2015-12-25")),
            new movie_1.Movie("Macbeth", "Drama", "Reino Unido. Francia, USA", "Justin Kurzel", new Date("2015-12-25")),
            new movie_1.Movie("Navidades, ¿Bien o en familia?", "Comedia", "USA", "Jessie Nelson", new Date("2015-12-25")),
            new movie_1.Movie("Palmeras en la nieve", "Drama", "España", "Fernando González Molina", new Date("2015-12-25"))
        ];
    };
    return MoviesService;
}());
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.js.map