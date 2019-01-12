import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TdUserComponent } from './td-user/td-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactFormComponent } from './react-form/react-form.component';
import {RouterModule, Routes} from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PopupComponent } from './popup/popup.component';
import { FirstsubComponent } from './firstsub/firstsub.component';
import { SecondsubComponent } from './secondsub/secondsub.component';
import {AuthenticatedGuard} from './authenticated.guard';
import { LoginComponent } from './login/login.component';
const routeDefinitions: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'tduser', component: TdUserComponent ,
    canActivate : [ AuthenticatedGuard],
   children: [
     {path: 'comp1', component: FirstsubComponent },
     {path: 'comp2', component: SecondsubComponent}
   ]},
  {path: 'popup', component: PopupComponent, outlet: 'popup'},
  {path: 'reactuser', component: ReactFormComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: ErrorComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    TdUserComponent,
    ReactFormComponent,
    ErrorComponent,
    NavigationComponent,
    PopupComponent,
    FirstsubComponent,
    SecondsubComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeDefinitions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
