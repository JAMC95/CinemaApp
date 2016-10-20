import {Component} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
import {FormBuilder, Validators} from "@angular/forms";
@Component ({
    selector: "add-movie",
    templateUrl: "./app/components/addmovies/addmovie.html",
     
})

export class AddMovieComponent{
    movieForm: FormGroup;

    constructor(builder: FormBuilder){
        this.movieForm = builder.group({
            title: ["", Validators.compose(
                [
                    Validators.required, Validators.minLength(8)
                ]
            )],
            genre: ["", Validators.compose(
                [
                    Validators.required, Validators.minLength(4)
                ]
            )],
            nationality: ["", Validators.required],
            director: ["", Validators.required]
        })

    }
}