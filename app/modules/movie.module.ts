import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SingleMovieComponent} from "../components/singlemovie/singlemovie";
import {MoviesComponent} from "../components/movies/movies";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchMoviesPipe} from "../pipes/search-movie-pipe";


import {AddMovieComponent} from "../components/addmovies/addmovies";


@NgModule({

    imports: [ BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ MoviesComponent, SingleMovieComponent, SearchMoviesPipe, AddMovieComponent ],
    bootstrap:    [ MoviesComponent ]
})
export class MoviesModule { }
