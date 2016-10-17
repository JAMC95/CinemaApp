export class Movie{
    title: string;
    genre: string;
    nationality: string;
    director: string;
    release_date: Date;


    constructor(title:string, genre:string, nationality:string, director:string, release_date:Date) {
        this.title = title;
        this.genre = genre;
        this.nationality = nationality;
        this.director = director;
        this.release_date = release_date;
    }
}