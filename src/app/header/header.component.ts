import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit {
  missionName = 'LC Angular 3';
  rocketName = 'ICAN';
  editingRocket = false;
  editingMission = false;

  constructor() { }

  ngOnInit() {
  }
  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }

  updateRocket(updatedName: string) {
    this.rocketName = updatedName;
    this.editingRocket = false;
  }
}
