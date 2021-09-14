import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/validators/email.validator';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    isShowPass = false;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, emailValidator()]],
            pass: ['', Validators.required]
        });
    }

    logIn() {
        console.log(this.loginForm.value);
    }

}
