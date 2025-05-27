import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  add(experiment: string) {
    this.addExperiment(experiment);
  }

  addExperiment(experiment: string) {
    if (experiment.trim()) {
      this.experiments.push(experiment.trim());
    }
  }

  removeExperiment(experiment: string) {
    const index = this.experiments.indexOf(experiment);
    if (index > -1) {
      this.experiments.splice(index, 1);
    }
  }
}
