import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "search"
})

export class SearchMoviesPipe{
    transform(value, field:string, search:string) {

        if(typeof search == "undefined"){
            console.log(search);
            return value;
        }

        return value.filter((res) => {
            return res[field].includes(search);
        })
    }
}