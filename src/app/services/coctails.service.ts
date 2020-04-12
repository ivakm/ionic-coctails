import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
});

export class CoctailsService {
  url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
  constructor(private http: HttpClient) { }

  getCoctails(elems) {
    this.http.get(this.url + elems );
  }
}
