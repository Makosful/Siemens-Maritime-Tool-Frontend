import { Component, OnInit } from '@angular/core';
import {RigService} from '../../shared/services/rig.service';
import {Rig} from '../../shared/models/rig';

@Component({
  selector: 'app-rig-list',
  templateUrl: './rig-list.component.html',
  styleUrls: ['./rig-list.component.css']
})
export class RigListComponent implements OnInit {

  rigs: Rig[];

  constructor(private rigService: RigService) { }

  ngOnInit() {
    this.rigs = this.rigService.getRigs();
  }

  addRig() {
    this.rigService.addRig({
      id: 69420,
      label: 'BI',
      name: 'Blaze it',
      lat: 55.32629578,
      lng: 8.65639392,
      color: '#00FF7F'
  });
  }
}
