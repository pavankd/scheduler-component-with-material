import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [

  {path: 'login', component: LoginComponent},
  {
    path: '',
    redirectTo: 'dashboard',
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [RouterModule]

})
export class AppRouteModule {
}
