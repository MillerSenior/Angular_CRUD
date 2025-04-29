import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CrewMember {
  name: string;
  firstMission: boolean;
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./bootstrap.min.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CrewComponent implements OnInit {
  memberBeingEdited: CrewMember | null = null;
  crewCount = 0;
  crew: CrewMember[] = [
    { name: 'Eileen Collins', firstMission: false },
    { name: 'Mae Jemison', firstMission: false },
    { name: 'Ellen Ochoa', firstMission: true }
  ];

  constructor() { }

  ngOnInit() { }

  add(memberName: string, isFirst: boolean) {
    console.log('Crew count at beginning of function call: ' + this.crewCount);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.crew.length; i++) {
      console.log('Crew member name: ' + this.crew[i].name);
      if (this.crew[i].name.toLowerCase() === memberName.toLowerCase()) {
        console.log(memberName + ' matches ' + this.crew[i].name);
        this.crewCount += 1;
        console.log('Crew count in loop: ' + this.crewCount);
      }
    }

    if (this.crewCount === 0) {
      console.log(memberName + ' not already in list.');
      this.crew.push({ name: memberName, firstMission: isFirst });
    }
    return this.crewCount = 0;
  }

  remove(member: CrewMember) {
    const index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: CrewMember) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: CrewMember) {
    member.name = name;
    this.memberBeingEdited = null;
  }

  getInputValue(id: string): string {
    const element = document.getElementById(id) as HTMLInputElement;
    return element ? element.value : '';
  }
}
