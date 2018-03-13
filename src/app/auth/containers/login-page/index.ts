import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './tmpl.html',
    styleUrls: ['./style.scss'],
})
export class LoginPageComponent {
    validateForm: FormGroup;
    _submitForm() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
    }

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true],
        });
    }
}
