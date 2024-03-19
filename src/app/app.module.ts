import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrewComponent } from './crew/crew.component';
import { HeaderComponent } from './header/header.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { EquipmentComponent } from './equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    CrewComponent,
    HeaderComponent,
    ExperimentsComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
