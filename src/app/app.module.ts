import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContentComponent} from './content/content.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DateproviderService} from './dateprovider.service';
import {UsersComponent} from './users/users.component';
import {ShowUsersComponent} from './show-users/show-users.component';
import {HighlightbackgroundDirective} from './highlightbackground.directive';
import {LifeCycleSnooperDirective} from './life-cycle-snooper.directive';
import {FormsModule} from '@angular/forms';
import {LoginModule} from './login/login.module';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {AuthenticatedGuard} from './authenticated.guard';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MyHttpInterceptor} from './my-http-interceptor';

const appRoutes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/content'
  },
  {path: 'content', component: ContentComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: 'showUser', component: ShowUsersComponent}
    ]
  },
  {path: '**', component: ErrorComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    ShowUsersComponent,
    HighlightbackgroundDirective,
    LifeCycleSnooperDirective,
    ErrorComponent],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: DateproviderService, useClass: DateproviderService},
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
