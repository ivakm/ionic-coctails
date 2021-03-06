import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { ICheckboxCategoryDrink, IDrink } from '../interfaces/filters';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor(private storage: Storage) {
  }

  setFilters(filters: ICheckboxCategoryDrink[] | any): Observable<ICheckboxCategoryDrink[]> {
    return fromPromise(this.storage.set('filters', filters));
  }

  getFilters(): Observable<ICheckboxCategoryDrink[]> {
    return fromPromise(this.storage.get('filters'));
  }

  ready() {
    return this.storage.ready();
  }

  // updateDB(data) {
  //   const newDB = new Storage({ driverOrder: ['indexeddb'] });
  //   newDB.ready().then(() => {
  //     newDB.set('filters', data);
  //   });
  // }

  setDrinksCategory(category: string, drinks: IDrink[]) {
    return fromPromise(this.storage.set(category, drinks));
  }

  getCategoryDrinks(category: string): Observable<IDrink[]> {
    return fromPromise(this.storage.get(category));
  }
}
