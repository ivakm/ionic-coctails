import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IFilters, IDrinks } from '../interfaces/filters';

@Injectable({
  providedIn: 'root'
})

export class FiltersService {
  filtersUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  constructor(private http: HttpClient) {
  }

  fetchFilters(): Observable<IDrinks[]> {
    return this.http.get(this.filtersUrl).pipe(
      map((res: IFilters) => {
        return res.drinks;
      })
    );
  }
}
