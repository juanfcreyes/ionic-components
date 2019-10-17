import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators' 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {
    return this.http.get<WidgetComponent[]>('/assets/data/menu.json');
  }

  getItems() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getSuperHeroes() {
    return this.http.get('/assets/data/superheroes.json').pipe(
      delay(2000)
    );
  }


}
