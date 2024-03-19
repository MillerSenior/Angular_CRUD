import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentBeingEdited: object = null;
  //experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  experiments: object[] = [
    {name: 'Moon soil sample'},
    {name: 'Plant growth in habitat'},
    {name: 'Human bone density'}
];

  constructor() { }

  ngOnInit() {
  }
  add(experimentName: string) {
    this.experiments.push({ name: experimentName});
  }

  remove(experiment: object) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: object) {
    this.experimentBeingEdited = experiment;
  }
  save(name: string, equipment: object) {
    equipment['name'] = name;
    this.experimentBeingEdited = null;
  }

}
