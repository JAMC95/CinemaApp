import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MoviesComponent} from "../components/movies/movies";


@NgModule({
    imports: [ BrowserModule ],
    declarations: [ MoviesComponent ],
    bootstrap:    [ MoviesComponent ]
})
export class MoviesModule { }
