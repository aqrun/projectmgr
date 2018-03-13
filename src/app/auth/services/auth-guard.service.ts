import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';
import "rxjs/add/observable/of";


export class AuthGuard implements CanActivate {
    constructor(){

    }

    canActivate(): Observable<boolean> {
        let data= Observable.of(true);
        //console.log(data)
        return data;
    }
}