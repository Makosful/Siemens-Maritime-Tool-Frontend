import { Component, OnInit } from '@angular/core';
import {RigService} from '../shared/services/rig.service';
import {Rig} from '../shared/models/rig';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-googlemap',
  templateUrl: './goggle-map.component.html',
  styleUrls: ['./goggle-map.component.css'],
})
export class GoggleMapComponent implements OnInit {

  constructor(private rigService: RigService) { }
  // EASV geo location
  latitude = 55.487784;
  longitude = 8.446826;
  zoom = 5;

  rigs: Rig[];
  gMap: any;
  isCollapsed = false;
  openedWindow = 0;
  input: any;
  pageEvent: PageEvent;
  amount: number;

  clickedMarker(window, rig) {
    this.openWindow(rig.id);
  }

  openWindow(id) {
    this.openedWindow = id;
  }

  isInfoWindowOpen(id) {
    return this.openedWindow === id;
  }

  ngOnInit() {
    this.pageEvent = {
      pageIndex: 0,
      pageSize: 10,
      length: this.amount
    };
    return this.rigService.getRigs(this.pageEvent.pageIndex + 1, this.pageEvent.pageSize).subscribe(rigList => {
      this.amount = rigList.count;
      this.rigs = rigList.list;
    });
  }

  showMarkerOnMap(rig: Rig) {
    if (this.gMap) {
      this.gMap.setCenter({ lat: rig.lat, lng: rig.lng});
    }
    this.openWindow(rig.id);
  }
}
