import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';


import {MaterialModule} from './material/material.module';
import {AppComponent} from './app.component';

import {LoginComponent} from './login/login.component';
import {UserService} from './user.service';
import {AuthGuard} from './auth.guard';
import {DashboardModule} from './dashboard/dashboard.module';
import { AppRouteModule } from './app-route.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    AppRouteModule
  ],
  providers: [
    UserService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
