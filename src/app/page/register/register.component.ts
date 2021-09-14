import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../shared/validators/email.validator';
import { checkPasswords } from '../../shared/validators/isPasswordsEqual.validator';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    isShowPass = false;
    isShowRepeatPass = false;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.formInit();
    }

    formInit() {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, emailValidator()]],
            pass: ['', Validators.required],
            passRepeat: ['', Validators.required]
        }, {
            validator: checkPasswords('pass', 'passRepeat'),
        });
    }

    showData() {
        console.log(this.registerForm.value);
        console.log(this.registerForm.valid);
    }

    // setFilters(filters: ICheckboxCategoryDrink[] | any): Observable<ICheckboxCategoryDrink[]> {
    //     return fromPromise(this.storage.set('filters', filters));
    // }
}
