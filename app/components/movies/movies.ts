import {Component} from "@angular/core";
import {Movie} from  "../../classes/movie";

@Component({
    selector: "app-movies",
    templateUrl: "./app/components/movies/movies.html"
})

export class MoviesComponent{
    movies: Movie[];
}



