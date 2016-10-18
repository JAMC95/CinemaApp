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
var core_1 = require("@angular/core");
var SingleMovieComponent = (function () {
    function SingleMovieComponent() {
    }
    SingleMovieComponent = __decorate([
        core_1.Component({
            selector: "single-movie",
            inputs: ["movie"],
            template: "\n        <div class=\"col-md-4\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">{{ movie.title}}</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <p>G\u00E9nero: {{ movie.genre }}</p>\n                    <p>Nacionalidad: {{ movie.nationality }}</p>\n                    <p>Director: {{ movie.director }}</p>\n                    <p>Fecha de esteno: {{ movie.release_date | date:\"short\" }}</p>\n                </div>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SingleMovieComponent);
    return SingleMovieComponent;
}());
exports.SingleMovieComponent = SingleMovieComponent;
//# sourceMappingURL=singlemovie.js.map