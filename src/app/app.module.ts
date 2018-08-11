import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {DateproviderService} from './dateprovider.service';
import { UsersComponent } from './users/users.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { HighlightbackgroundDirective } from './highlightbackground.directive';
import { LifeCycleSnooperDirective } from './life-cycle-snooper.directive';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    ShowUsersComponent,
    HighlightbackgroundDirective,
    LifeCycleSnooperDirective],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule
  ],
  providers: [
    {provide: DateproviderService, useClass: DateproviderService},
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
