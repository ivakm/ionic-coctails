import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FiltersService {
  filtersUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  constructor(private http: HttpClient) { }

  fetchFilters() {
    return this.http.get(this.filtersUrl);
  }
}
