import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly CREW_KEY = 'crew';
  private readonly EQUIPMENT_KEY = 'equipment';
  private readonly EXPERIMENTS_KEY = 'experiments';
  private readonly MISSION_KEY = 'mission';

  constructor() {
    this.initializeStorage();
  }

  private initializeStorage() {
    if (!localStorage.getItem(this.CREW_KEY)) {
      localStorage.setItem(this.CREW_KEY, JSON.stringify(['Jessica Watkins', 'Raja Chari', 'Jasmin Moghbeli']));
    }
    if (!localStorage.getItem(this.EQUIPMENT_KEY)) {
      localStorage.setItem(this.EQUIPMENT_KEY, JSON.stringify(['Habitat dome', 'Drones', 'Food containers']));
    }
    if (!localStorage.getItem(this.EXPERIMENTS_KEY)) {
      localStorage.setItem(this.EXPERIMENTS_KEY, JSON.stringify(['Mars soil sample', 'Plant growth in Mars gravity', 'Human bone density']));
    }
    if (!localStorage.getItem(this.MISSION_KEY)) {
      localStorage.setItem(this.MISSION_KEY, JSON.stringify({
        name: 'Mars Mission Alpha',
        rocket: 'Falcon Heavy'
      }));
    }
  }

  getCrew(): string[] {
    return JSON.parse(localStorage.getItem(this.CREW_KEY) || '[]');
  }

  setCrew(crew: string[]) {
    localStorage.setItem(this.CREW_KEY, JSON.stringify(crew));
  }

  getEquipment(): string[] {
    return JSON.parse(localStorage.getItem(this.EQUIPMENT_KEY) || '[]');
  }

  setEquipment(equipment: string[]) {
    localStorage.setItem(this.EQUIPMENT_KEY, JSON.stringify(equipment));
  }

  getExperiments(): string[] {
    return JSON.parse(localStorage.getItem(this.EXPERIMENTS_KEY) || '[]');
  }

  setExperiments(experiments: string[]) {
    localStorage.setItem(this.EXPERIMENTS_KEY, JSON.stringify(experiments));
  }

  getMission(): { name: string; rocket: string } {
    return JSON.parse(localStorage.getItem(this.MISSION_KEY) || '{"name":"","rocket":""}');
  }

  setMission(mission: { name: string; rocket: string }) {
    localStorage.setItem(this.MISSION_KEY, JSON.stringify(mission));
  }
} 