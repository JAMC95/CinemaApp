import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SingleMovieComponent} from "../components/singlemovie/singlemovie";
import {MoviesComponent} from "../components/movies/movies";
import {FormsModule} from "@angular/forms";
import {SearchMoviesPipe} from "../pipes/search-movie-pipe";
import {FormBuilder, Validators} from "@angular/forms";
import {FORM_DIRECTIVES} from "@angular/forms/src/directives";
import {AddMovieComponent} from "../components/addmovies/addmovies";


@NgModule({

    imports: [ BrowserModule, FormsModule, FormBuilder, Validators, FORM_DIRECTIVES ],
    declarations: [ MoviesComponent, SingleMovieComponent, SearchMoviesPipe, AddMovieComponent ],
    bootstrap:    [ MoviesComponent ]
})
export class MoviesModule { }
