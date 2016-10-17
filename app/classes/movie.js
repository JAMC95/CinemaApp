"use strict";
var Movie = (function () {
    function Movie(title, genre, nationality, director, release_date) {
        this.title = title;
        this.genre = genre;
        this.nationality = nationality;
        this.director = director;
        this.release_date = release_date;
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.js.map