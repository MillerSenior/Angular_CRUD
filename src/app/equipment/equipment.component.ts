import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Equipment {
  name: string;
}

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EquipmentComponent implements OnInit {
  equipmentBeingEdited: Equipment | null = null;
  equipmentItems: Equipment[] = [
    {name: 'Habitat Dome'},
    {name: 'Drones'},
    {name: 'Food Containers'},
    {name: 'Oxygen Tanks'}
  ];

  constructor() { }

  ngOnInit() { }

  add(equipmentName: string) {
    this.equipmentItems.push({ name: equipmentName});
  }

  remove(equipment: Equipment) {
    const index = this.equipmentItems.indexOf(equipment);
    this.equipmentItems.splice(index, 1);
  }

  edit(equipment: Equipment) {
    this.equipmentBeingEdited = equipment;
  }

  save(name: string, equipment: Equipment) {
    equipment.name = name;
    this.equipmentBeingEdited = null;
  }

  getInputValue(id: string): string {
    const element = document.getElementById(id) as HTMLInputElement;
    return element ? element.value : '';
  }
}
