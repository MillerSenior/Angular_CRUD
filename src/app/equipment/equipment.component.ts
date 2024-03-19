import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentBeingEdited: object = null;
   equipmentItems: object[] = [
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

  remove(equipment: object) {
    let index = this.equipmentItems.indexOf(equipment);
    this.equipmentItems.splice(index, 1);
  }

  edit(equipment: object) {
    this.equipmentBeingEdited = equipment;
  }
  save(name: string, equipment: object) {
    equipment['name'] = name;
    this.equipmentBeingEdited = null;
  }

}