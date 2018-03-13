import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions, Routes } from '@angular/router';

import { AuthGuard } from './auth/services/auth-guard.service';
import { PagesComponent } from './core/containers';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'dashboard',loadChildren: './pages/dashboard#DashboardModule',},
            {path: 'users',loadChildren: './pages/users#UsersModule',},

            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    },
    //{ path: '**', redirectTo: '/dashboard'}
];

const config: ExtraOptions = {
    useHash: true
}

@NgModule({
    imports: [
        RouterModule.forRoot(routes, config)
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {

}