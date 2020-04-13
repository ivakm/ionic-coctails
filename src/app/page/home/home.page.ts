import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FiltersService } from '../../services/filters.service';
import { ICategoryDrink, ICategoryDrinkView, ICheckboxCategoryDrink, IGroupDrink } from '../../interfaces/filters';
import { filter, first, map, skipWhile, switchMap, tap, toArray } from 'rxjs/operators';
import { CocktailsService } from '../../services/cocktails.service';
import { StorageService } from '../../services/storage.service';
import { from, Subject, zip } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  filters: ICheckboxCategoryDrink[] = [];
  list: IGroupDrink[] = [];
  isLoading = false;
  viewFilters$ = new Subject<ICheckboxCategoryDrink>();
  categoryFilters$ = zip(
    this.viewFilters$,
    this.viewFilters$.pipe(
      map((item: ICategoryDrinkView) => item[0]),
      switchMap(category => this.cocktailsService.getCocktail(category)))
  );

  constructor(private navCtrl: NavController,
              private filtersService: FiltersService,
              private cocktailsService: CocktailsService,
              private storageService: StorageService) {
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.storageService.getFilters().pipe(
      switchMap((filters) => from(filters)),
      filter(item => item[1]),
      toArray()
    ).subscribe(filters => {
      const filterToView = filters.shift();
      this.filters = [...filters];
      this.viewFilters$.next(filterToView);
    });
  }

  ionViewWillLeave() {
    this.list = [];
  }

  ngOnInit() {
    this.categoryFilters$.subscribe(([item, drinks]) => {
      this.list = [...this.list, { category: item[0], drinks }];
      this.isLoading = false;
    });
  }

  navigatePage(link: string) {
    this.navCtrl.navigateForward(link);
  }

  onScrollEnd(event) {
    if (!this.filters.length || this.isLoading) {
      return;
    }

    this.isLoading = true;
    const filterToView = this.filters.shift();
    this.viewFilters$.next(filterToView);

  }
}
