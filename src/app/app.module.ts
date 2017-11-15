import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RaceComponent } from './components/race/race.component';
import { PoneyComponent } from './components/poney/poney.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RaceService } from './services/race.service';


@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    PoneyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [RaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
