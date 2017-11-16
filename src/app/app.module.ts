import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RaceComponent } from './components/race/race.component';
import { PoneyComponent } from './components/poney/poney.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RaceService } from './services/race.service';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router'
import rootRouterConfig from './app.routes';
import { RaceCreateComponent } from './components/race-create/race-create.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatSelectModule, MatInputModule, MatButtonModule} from '@angular/material';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    PoneyComponent,
    HomeComponent,
    RaceCreateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rootRouterConfig),
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpModule
  ],
  providers: [RaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
