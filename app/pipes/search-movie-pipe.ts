import {Pipe} from "@angular/core";

@Pipe({
    name: "search"
})

export class SearchMoviesPipe{
    transform(value, [field, search]:[string,string]){
        if(typeof search == "undefined"){
            return value;
        }

        return value.filter((res) =>{
            return res[field].includes(search);
        } )
    }
}