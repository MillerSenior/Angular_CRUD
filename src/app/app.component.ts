import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CrewComponent } from './crew/crew.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ExperimentsComponent } from './experiments/experiments.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CrewComponent,
    EquipmentComponent,
    ExperimentsComponent
  ]
})
export class AppComponent {
  title = 'mission-planning-dashboard';
  editingRocket = false;
  editingMission = false;
}
