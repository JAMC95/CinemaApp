import {Movie} from "../classes/movie";

export class MoviesService {
    movies:Movie[];

    constructor() {

    }

    get() {
        return this.movies = [
            new Movie(
                "El secreto de Amila",
                "Animación",
                "España",
                "Gorka Vázquez",
                new Date("2015-12-23")
            ),
            new Movie(
                "Carlitos y Snoopy: la película de Peanuts",
                "Animación, Aventuras",
                "USA",
                "Steve Martino",
                new Date("2015-12-25")
            ),
            new Movie(
                "El Desafío",
                "Drama, Biopic",
                "USA",
                "Robert Zemeckis",
                new Date("2015-12-25")
            ),
            new Movie(
                "Hermanísimas",
                "Drama",
                "Francia",
                "Lucie Borleteau",
                new Date("2015-12-25")
            ),
            new Movie(
                "La Odisea de Alice",
                "Animación, Aventuras",
                "USA",
                "Steve Martino",
                new Date("2015-12-25")
            ),
            new Movie(
                "Macbeth",
                "Drama",
                "Reino Unido. Francia, USA",
                "Justin Kurzel",
                new Date("2015-12-25")
            ),
            new Movie(
                "Navidades, ¿Bien o en familia?",
                "Comedia",
                "USA",
                "Jessie Nelson",
                new Date("2015-12-25")
            ),
            new Movie(
                "Palmeras en la nieve",
                "Drama",
                "España",
                "Fernando González Molina",
                new Date("2015-12-25")
            )
        ];

    }

  

}