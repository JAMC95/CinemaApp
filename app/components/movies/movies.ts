import {Component} from "@angular/core";
import {Movie} from "../../classes/movie";
import {MoviesService} from "../../providers/movies";

@Component({
    selector: "app-movies",
    templateUrl: "./app/components/movies/movies.html",
    providers: [MoviesService]
})

export class MoviesComponent {
     movies: Array<Movie>;

    constructor(public moviesService: MoviesService) {
            this.movies = moviesService.get();
    }
    
    /*

    TODO: Añadir campo fecha para las nuevas peliculas
    TODO: Añadir comprobante para no poder repetir una misma pelicula
     */
}