import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { ICategoryDrink, ICheckboxCategoryDrink, IDrink, IDrinks } from '../interfaces/filters';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';
  newData = new BehaviorSubject([]);
  firstRender = new BehaviorSubject(true);

  constructor(private http: HttpClient) {
  }

  getCocktail(param: string): Observable<IDrink[]> {
    return this.http.get(this.url, { params: { c: param } }).pipe(
      map<IDrinks, IDrink[]>(categoryDrinks => categoryDrinks.drinks)
    );
  }

  setDataAfterFiltered(arr: ICategoryDrink[]) {
    this.newData.next(arr);
    this.firstRender.next(false);
  }
}
