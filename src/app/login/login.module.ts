import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { Login2Component } from '../login2/login2.component';

const loginRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'login2', component: Login2Component}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [LoginComponent, Login2Component],
  exports: [LoginComponent, RouterModule]
})
export class LoginModule { }
