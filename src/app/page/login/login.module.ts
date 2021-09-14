import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouterModule } from './login-router.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRouterModule,
        IonicModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        RouterModule
    ]
})
export class LoginModule {
}
