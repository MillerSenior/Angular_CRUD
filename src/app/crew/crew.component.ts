import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./bootstrap.min.css']
})
export class CrewComponent implements OnInit {
  memberBeingEdited: object = null;
  crewCount: number = 0;
  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];

  constructor() { }

  ngOnInit() { }


  add(memberName: string, isFirst: boolean) {
    console.log('Crew count at beginning of function call: '+this.crewCount)
    for (let i = 0; i < this.crew.length; i++) {
      console.log("Crew member name: "+this.crew[i]['name']);
      if (this.crew[i]['name'].toLowerCase() === memberName.toLowerCase()) {
        console.log(memberName + ' matches ' + this.crew[i]['name']);
        this.crewCount += 1;
        console.log('Crew count in loop: ' + this.crewCount)
      }
    }

    if (this.crewCount ===0) {
      console.log(memberName+' not already in list.')
      this.crew.push({ name: memberName, firstMission: isFirst });
    }
    return this.crewCount=0;
  }
  
  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }
  
  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }
  




}