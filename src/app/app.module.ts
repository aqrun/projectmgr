import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AppComponent } from './core/containers/app';
import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth'


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    AuthModule,
    NgZorroAntdModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
