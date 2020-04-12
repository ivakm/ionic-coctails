import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { ICheckboxCategoryDrink, IDrink, IDrinks } from '../interfaces/filters';
import Any = jasmine.Any;
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';

  constructor(private http: HttpClient) {
  }

  getCocktail(param: string): Observable<IDrinks> {
    return this.http.get(this.url, { params: { c: param } }) as Observable<IDrinks>;
  }

  getCocktails(filters: ICheckboxCategoryDrink[]) {
    const elms = filters.map(([category, value]) => value ? category.replace(' ', '_') : null).filter(Boolean);

    const requests: Observable<IDrink[]>[] = elms.map(elem => this.getCocktail(elem).pipe(
      map<IDrinks, IDrink[]>(categoryDrinks => categoryDrinks.drinks)
    ));

    return forkJoin(requests);
  }
}
