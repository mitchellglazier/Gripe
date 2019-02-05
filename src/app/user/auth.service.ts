import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { parseCookieValue } from '@angular/common/src/cookie';

@Injectable()
export class AuthService {
    currentUser: IUser;
    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Mitchell',
            lastName: 'Glazier'
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}
