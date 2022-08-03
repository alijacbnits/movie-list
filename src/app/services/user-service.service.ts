import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  getData(searchText:string,page:number) {
    // let url = 'https://pixabay.com/api/?key=28430660-d6ef5529c78e1040f8b94faab&q='+searchText+'&image_type=photo&pretty=true&page='+page;
    // let url = 'http://www.omdbapi.com/?apikey=92087764&s='+searchText+'';
    let url = 'http://www.omdbapi.com/?apikey=92087764&s=movie';
    // let url = 'https://jsonplaceholder.typicode.com/todos/'
    console.log(url)
    return this.http.get(url);
  }

  getData1(searchText:string) {
    let url1 = `http://www.omdbapi.com/?apikey=92087764&s=${searchText}`;
    console.log(url1)
    return this.http.get(url1);
  }

  // getData2(imdbID:string) {
  //   let url2 = `http://www.omdbapi.com/?apikey=92087764&i=${imdbID}`;
  //   console.log(url2)
  //   return this.http.get(url2);
  // }
  
}
