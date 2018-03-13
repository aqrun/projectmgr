import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared';
import { ListPageComponent } from './containers/list-page';

const routes: Routes = [
    {path: '', component: ListPageComponent }
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        ListPageComponent,
    ]
})
export class UsersModule {

}