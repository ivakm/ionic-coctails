import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageService } from './services/storage.service';
import { FiltersService } from './services/filters.service';
import { map, switchMap, toArray } from 'rxjs/operators';
import { ICategoryDrink, ICheckboxCategoryDrink } from './interfaces/filters';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageService: StorageService,
    private filtersService: FiltersService
  ) {
    this.initializeApp().then();
  }

  async initializeApp() {
    await this.platform.ready();
    await this.storageService.ready();
    this.statusBar.styleDefault();
    this.splashScreen.hide();

    this.filtersService.fetchFilters().pipe(
      switchMap((filters: ICategoryDrink[]) => {
        return from(filters);
      }),
      map<ICategoryDrink, ICheckboxCategoryDrink>((filter) => {
        return [filter.strCategory, true];
      }),
      toArray(),
      switchMap((filters) => this.storageService.setFilters(filters))
    ).subscribe(() => {
    });
  }


}
