import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

import { User, Authenticate } from '../models/user';

@Injectable()
export class AuthService {
    constructor(){}

    login({username, password}: Authenticate): Observable<User> {
        if(username != 'test'){
            return _throw('Invalid username or password!')
        }

        return of({name: 'test user'})
    }

    logout(): Observable<boolean>{
        return of(true);
    }
}