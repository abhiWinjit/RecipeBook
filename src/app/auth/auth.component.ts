import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService) { }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        // console.log(form.value);
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        this.isLoading = true;
        if (this.isLoginMode) {
            //..
            console.log("nothing can be done")
        } else {
            this.authService.signup(email, password).subscribe(resData => {
                console.log(resData);
                this.isLoading = false;
            }, error => {
                console.log(error);
                this.error = 'An error ouccurred!';
                this.isLoading = false;
            });
        }


        form.reset();
    }
}