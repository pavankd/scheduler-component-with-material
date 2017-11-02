import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Route} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';


import {MaterialModule} from './material/material.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SchedulerComponent} from './scheduler/scheduler.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SchedulerComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
