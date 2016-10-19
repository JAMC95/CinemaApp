import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SingleMovieComponent} from "../components/singlemovie/singlemovie";
import {MoviesComponent} from "../components/movies/movies";
import {FormsModule} from "@angular/forms";


@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ MoviesComponent, SingleMovieComponent ],
    bootstrap:    [ MoviesComponent ]
})
export class MoviesModule { }
