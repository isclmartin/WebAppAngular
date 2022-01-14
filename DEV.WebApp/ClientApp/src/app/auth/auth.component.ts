import { Component, OnInit } from '@angular/core';

import UserAuth from '../shared/UserAuth';
import AuthApiService from '../shared/auth.api.service';

@Component({
    selector: 'app-root',
    templateUrl: './auth.component.html'
})
export class UserAuthComponent {
    title = 'app';

    userAuth: UserAuth;
    userName = "";
    password = "";

    constructor(private authApiService: AuthApiService) {

    }

    validateUser(user, password) {
        this.authApiService.validateUser(user, password).subscribe(data => {
            this.userAuth = data;
        });
    }
}
