import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../../services/filters.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ICategoryDrink, ICheckboxCategoryDrink } from '../../interfaces/filters';
import { StorageService } from '../../services/storage.service';
import { NavController } from '@ionic/angular';
import { CocktailsService } from '../../services/cocktails.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss']
})

export class FiltersPage implements OnInit {
  filters: ICheckboxCategoryDrink[] = [];
  form: FormGroup;

  constructor(
    private filtersService: FiltersService,
    private formBuilder: FormBuilder,
    private cocktailsService: CocktailsService,
    private navCtrl: NavController,
    private storageService: StorageService) {
  }

  ngOnInit() {
    this.storageService.getFilters().subscribe(filters => {
      this.filters = filters;

      this.initialForm([...filters]);
    });
  }

  initialForm(filters: ICheckboxCategoryDrink[]) {
    const controllers = filters.map(([category, value]) => {
      const control = new FormControl(value);
      return control;
    });

    this.form = this.formBuilder.group({
      filtersArray: new FormArray(controllers)
    });
  }

  submitForm() {
    const filters: ICategoryDrink[] = this.form.value.filtersArray
      .map((value, index) => ([this.filters[index][0], value]));

    this.storageService.setFilters(filters).subscribe(() => {
      // this.storageService.updateDB(filters);
    }, err => {
      alert(err);
    });
    this.cocktailsService.setDataAfterFiltered(filters);
    this.navCtrl.back();
  }
}
