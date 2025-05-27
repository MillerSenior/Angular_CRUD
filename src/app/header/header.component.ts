import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  missionName: string;
  rocketName: string;
  editingRocket = false;
  editingMission = false;
  currentTime: Date = new Date();
  private timeInterval: any;

  constructor(private storageService: StorageService) {
    const mission = this.storageService.getMission();
    this.missionName = mission.name;
    this.rocketName = mission.rocket;
  }

  ngOnInit() {
    this.timeInterval = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
    this.storageService.setMission({ name: this.missionName, rocket: this.rocketName });
  }

  updateRocket(updatedName: string) {
    this.rocketName = updatedName;
    this.editingRocket = false;
    this.storageService.setMission({ name: this.missionName, rocket: this.rocketName });
  }
}
