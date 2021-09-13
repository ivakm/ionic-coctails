import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        IonicModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class RegisterModule {
}
