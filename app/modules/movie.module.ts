import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SingleMovieComponent} from "../components/singlemovie/singlemovie";
import {MoviesComponent} from "../components/movies/movies";
import {FormsModule} from "@angular/forms";
import {SearchMoviesPipe} from "../pipes/search-movie-pipe";


@NgModule({

    imports: [ BrowserModule, FormsModule ],
    declarations: [ MoviesComponent, SingleMovieComponent, SearchMoviesPipe ],
    bootstrap:    [ MoviesComponent ]
})
export class MoviesModule { }
