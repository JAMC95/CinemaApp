import {Component} from "@angular/core";
import {Movie} from "../../classes/movie";


@Component({
    selector: "app-movies",
    templateUrl: "./app/components/movies/movies.html"
})

export class MoviesComponent {
    movies: Movie[];

    constructor() {
        this.movies = [
            new Movie(
                "El secreto de Amila",
                "Animación",
                "España",
                "Gorka Vázquez",
                new Date("2015-12-23")
            ),
            new Movie(
                "Carlitos y Snoopy: la película de Peanuts",
                "Animación, Aventuras",
                "USA",
                "Steve Martino",
                new Date("2015-12-25")
            )
        ];
    }
}