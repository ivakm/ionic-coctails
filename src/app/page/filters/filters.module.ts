import { NgModule } from '@angular/core';
import { FiltersPage } from './filters.page';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FiltersPage
      }
    ])
  ],
  declarations: [FiltersPage],
})
export class FiltersPageModule { }
