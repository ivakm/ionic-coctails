import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IFilters, ICategoryDrink } from '../interfaces/filters';

@Injectable({
  providedIn: 'root'
})

export class FiltersService {
  filtersUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  loading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  fetchFilters(): Observable<ICategoryDrink[]> {
    return this.http.get(this.filtersUrl).pipe(
      tap(() => this.loading$.next(true)),
      map((res: IFilters) => {
        return res.drinks;
      }),
      finalize(() => {
        this.loading$.next(false);
      }));
  }
}
