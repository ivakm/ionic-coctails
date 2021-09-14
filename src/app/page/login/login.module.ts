import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouterModule } from './login-router.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRouterModule,
        IonicModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        RouterModule,
        MatIconModule,
        MatFormFieldModule
    ]
})
export class LoginModule {
}
