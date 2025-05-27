import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  addEquipment(item: string) {
    if (item.trim()) {
      this.equipment.push(item.trim());
    }
  }

  removeEquipment(item: string) {
    const index = this.equipment.indexOf(item);
    if (index > -1) {
      this.equipment.splice(index, 1);
    }
  }
}
