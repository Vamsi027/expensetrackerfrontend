import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyComponent } from './daily/daily.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
   {
    path : 'login',
    component : LoginComponent
   },
   {
    path : 'signup',
    component : SignupComponent
   },
   {
    path : 'daily',
    component : DailyComponent
   },
   {
     path : '',
     redirectTo : '/login',
     pathMatch : 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
