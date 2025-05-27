import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew: string[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  addCrew(name: string) {
    if (name.trim()) {
      this.crew.push(name.trim());
    }
  }

  removeCrew(member: string) {
    const index = this.crew.indexOf(member);
    if (index > -1) {
      this.crew.splice(index, 1);
    }
  }
}
