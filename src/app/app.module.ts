// This module is no longer needed as we're using standalone components
// The application is now bootstrapped directly with AppComponent in main.ts

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CrewComponent } from './crew/crew.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CrewComponent,
    EquipmentComponent,
    ExperimentsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
