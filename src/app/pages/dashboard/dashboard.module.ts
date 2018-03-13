import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared'
import { DashboardComponent } from './containers/dashboard';


const routes = [
    {path:'', component: DashboardComponent}
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {

}