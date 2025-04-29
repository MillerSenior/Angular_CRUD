import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Experiment {
  name: string;
}

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ExperimentsComponent implements OnInit {
  experimentBeingEdited: Experiment | null = null;
  // tslint:disable-next-line:max-line-length
  // experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  experiments: Experiment[] = [
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

  remove(experiment: Experiment) {
    const index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: Experiment) {
    this.experimentBeingEdited = experiment;
  }

  save(name: string, experiment: Experiment) {
    experiment.name = name;
    this.experimentBeingEdited = null;
  }
}
