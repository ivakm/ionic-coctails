import { Component, OnInit, ViewChild } from '@angular/core';
import { FiltersService } from '../../services/filters.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { finalize, map } from 'rxjs/operators';
import { IDrinks } from '../../interfaces/filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss']
})

export class FiltersPage implements OnInit {
  filtersData: IDrinks[] = [];
  form: FormGroup;
  isLoading = false;

  constructor(
    private filtersService: FiltersService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.initialForm();
    this.filtersService.fetchFilters().pipe(
      finalize(() => {
        this.isLoading = false;
      })
      )
      .subscribe(drinks => {
        console.log(drinks);
        this.filtersData = [...drinks];
        this.addCheckboxes(drinks);
      });
  }

  initialForm() {
    this.form = this.formBuilder.group({
      filtersArray: new FormArray([])
    });
  }

  private addCheckboxes(checkboxes: IDrinks[]) {
    const formArray = this.form.controls.filtersArray as FormArray;

    checkboxes.forEach((checkbox, index) => {
      const control = new FormControl(true);
      formArray.push(control);
    });
  }

  submitForm() {
    const selectedFilters = this.form.value.filtersArray
      .map((control, index) => (control ? this.filtersData[index].strCategory : null))
      .filter(val => val !== null);
    console.log(selectedFilters);
  }
}
