import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from '../navbar/navbar.component';
import {SchedulerComponent} from '../scheduler/scheduler.component';
import {DashboardComponent} from './dashboard.component';
import {MaterialModule} from '../material/material.module';
import { DashboardRouteModule } from './dashboard-route.module';
import { HomeComponent } from './home/home.component';
import { DemographicsModule } from './demographics/demographics.module';
import { PchModule } from './pch/pch.module';
import { OrdersModule } from './orders/orders.module';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { PatientSearchComponent } from './patient-search/patient-search.component'



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRouteModule,
    DemographicsModule,
    PchModule,
    OrdersModule
  ],
  declarations: [
    NavbarComponent,
    SchedulerComponent,
    DashboardComponent,
    HomeComponent,
    SettingsComponent,
    ProfileComponent,
    PatientSearchComponent,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {
}
