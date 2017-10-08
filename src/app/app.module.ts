import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommandComponent } from '../command/command.component';
import { TextComponent } from '../text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandComponent,
    TextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
