import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: string[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    if (item.trim()) {
      this.equipmentItems.push(item.trim());
    }
  }

  removeEquipment(item: string) {
    const index = this.equipmentItems.indexOf(item);
    if (index > -1) {
      this.equipmentItems.splice(index, 1);
    }
  }
}
