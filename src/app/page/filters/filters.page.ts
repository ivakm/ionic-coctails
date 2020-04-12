import { Component, OnInit, ViewChild } from '@angular/core';
import { FiltersService } from '../../services/filters.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss']
})

export class FiltersPage implements OnInit {
  filtersData;
  form: FormGroup;
  isLoading = false;
  @ViewChild('checkbox', { static: false }) checkbox;

  constructor(
    private filtersService: FiltersService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.initialForm();
    this.filtersService.fetchFilters()
      .pipe(
        finalize(() => this.isLoading = false))
      .subscribe(res => {
        this.filtersData = res;
        this.addCheckboxes();
      });
  }

  initialForm() {
    this.form = this.formBuilder.group({
      filtersArray: new FormArray([])
    });
  }

  private addCheckboxes() {
    this.filtersData.drinks.forEach((c, i) => {
      const control = new FormControl(i === i);
      (this.form.controls.filtersArray as FormArray).push(control);
    });
  }

  submitForm() {
    const selectedFilters = this.form.value.filtersArray
      .map((v, i) => (v ? this.filtersData.drinks[i].strCategory : null))
      .filter(v => v !== null);
    console.log(selectedFilters);
    console.log(this.form.controls.filtersArray.controls[1].value);
    console.log(this.checkbox.value);
  }
}
