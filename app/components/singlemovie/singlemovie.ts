import {Component} from "@angular/core";

@Component({
    selector: "single-movie",
    inputs: ["movie"],
    template: `
    <div class="col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">{{movie.title}}</h3>
            </div>
                <div class="panel-body">
                    <p>Género: {{movie.genre}}</p>
                    <p>Nacionalidad: {{movie.nationality}}</p>
                    <p>Director: {{movie.director}}</p>
                    <p>Fecha de estreno: {{movie.release_date | date:"short"}}</p>
                </div>
        </div>
    </div>
`
})

export class SingleMovieComponent{

}