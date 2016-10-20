"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var movie_1 = require("../../classes/movie");
var movies_1 = require("../movies/movies");
var AddMovieComponent = (function () {
    function AddMovieComponent(builder, app) {
        this.submitted = false;
        this.app = app;
        this.movieForm = builder.group({
            'title': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(8)
                ])],
            'genre': ["", forms_1.Validators.compose([
                    forms_1.Validators.required, forms_1.Validators.minLength(4)
                ])],
            'nationality': ["", forms_1.Validators.required],
            'director': ["", forms_1.Validators.required]
        });
    }
    AddMovieComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.movie = this.movieForm.value;
        this.app.movies.push(new movie_1.Movie(this.movie.title, this.movie.genre, this.movie.nationality, this.movie.director, new Date()));
        document.getElementById("movieForm").reset();
    };
    AddMovieComponent = __decorate([
        core_1.Component({
            selector: "add-movie",
            templateUrl: "./app/components/addmovies/addmovie.html",
        }),
        __param(1, core_1.Inject(core_1.forwardRef(function () { return movies_1.MoviesComponent; }))), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, movies_1.MoviesComponent])
    ], AddMovieComponent);
    return AddMovieComponent;
}());
exports.AddMovieComponent = AddMovieComponent;
//# sourceMappingURL=addmovies.js.map