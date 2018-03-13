/**
 * 纯服务模块
 * 没有declarations
 * 只加载一次
 * 适合只加载一次的组件或服务
 */

import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared'
import {
    AppComponent,
    PagesComponent,
} from './containers';
import {
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
} from './components';

const COMPONENTS = [
    AppComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
];

@NgModule({
    declarations: [
        
        ...COMPONENTS
    ],
    imports: [
        SharedModule,
        RouterModule,
    ],
    exports: COMPONENTS,
    providers: [

    ]
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parent: CoreModule
    ) {
        if(parent){
            throw new Error('CoreModule already exist!')
        }
    }
}