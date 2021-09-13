import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DrinkComponent } from './components/drink/drink.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ]),
    ],
    declarations: [HomeComponent, CategoryListComponent, DrinkComponent]
})
export class HomePageModule {
}
