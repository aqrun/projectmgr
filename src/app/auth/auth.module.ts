import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { LoginPageComponent } from './containers/login-page';

import { SharedModule } from '../shared';

const routes: Routes = [
    {path: 'login', component: LoginPageComponent },
];

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        LoginPageComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
    ]
})
export class AuthModule {

}