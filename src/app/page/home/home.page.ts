import { Component, HostListener, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FiltersService } from '../../services/filters.service';
import { ICategoryDrink, ICheckboxCategoryDrink, IGroupDrink } from '../../interfaces/filters';
import { combineAll, concatAll, concatMap, finalize, map, switchMap, tap, toArray } from 'rxjs/operators';
import { CocktailsService } from '../../services/cocktails.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  isLoading = false;
  filters = [];
  list: IGroupDrink[] = [];

  constructor(private navCtrl: NavController,
              private filtersService: FiltersService,
              private cocktailsService: CocktailsService,
              private storageService: StorageService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.filtersService.loading$.subscribe(isLoading => {
      console.log(isLoading);
    });
    this.storageService.getFilters().pipe(
      tap(filters => this.filters = filters),
      switchMap((filters) => this.cocktailsService.getCocktails(filters))
    ).subscribe(lists => {
      this.list = [{ category: this.filters[0][0], drinks: lists[0] }];
    });
  }

  navigatePage(link: string) {
    this.navCtrl.navigateForward(link);
  }

  onScroll(event) {
    console.log(event);
  }
}
