import {Component, Inject, forwardRef} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {FormBuilder, Validators} from "@angular/forms";
import {Movie} from "../../classes/movie";
import {MoviesComponent} from "../movies/movies"

@Component ({
    selector: "add-movie",
    templateUrl: "./app/components/addmovies/addmovie.html",

})

export class AddMovieComponent{
    movieForm: FormGroup;
    movie:Movie;
    app: MoviesComponent;

    constructor(builder: FormBuilder, @Inject(forwardRef(() => MoviesComponent )) app: MoviesComponent){
        this.app = app;
        this.movieForm = builder.group({
            'title': ["", Validators.compose(
                [
                    Validators.required, Validators.minLength(8)
                ]
            )],
            'genre': ["", Validators.compose(
                [
                    Validators.required, Validators.minLength(4)
                ]
            )],
            'nationality': ["", Validators.required],
            'director': ["", Validators.required]
        })

    }

    submitted = false;

    onSubmit() {
        this.submitted = true;
        this.movie = this.movieForm.value;
        this.app.movies.push(
            new Movie(
                this.movie.title, this.movie.genre, this.movie.nationality, this.movie.director, new Date()
            )
        );
        document.getElementById("moviesForm").reset();

    }




}


