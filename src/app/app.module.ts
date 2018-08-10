import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {DateproviderService} from './dateprovider.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
