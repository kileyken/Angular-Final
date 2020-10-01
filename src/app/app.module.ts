import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FinalInputComponent } from './components/final-input/final-input.component';
import {FinalService } from './services/final.service';
import { FinalItemComponent } from './components/final-item/final-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FinalInputComponent,
    FinalItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FinalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
