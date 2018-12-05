import { Component, OnInit } from '@angular/core';
import {RigService} from '../shared/services/rig.service';
import {MapService} from '../shared/services/map.service';
import {Rig} from '../shared/models/rig';

@Component({
  selector: 'app-googlemap',
  templateUrl: './goggle-map.component.html',
  styleUrls: ['./goggle-map.component.css'],
})
export class GoggleMapComponent implements OnInit {

  constructor(private rigService: RigService, private mapService: MapService) { }
  // EASV geo location
  latitude = 55.487784;
  longitude = 8.446826;

  rigs: Rig[];
  gMap: any;
  isCollapsed = false;
  openedWindow = 0;
  input: any;

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
    // TODO revert this
    this.rigs = this.mapService.populateMarkerList();
    // return this.rigService.getRigs();
  }

  showMarkerOnMap(rig: Rig) {
    if (this.gMap) {
      this.gMap.setCenter({ lat: rig.lat, lng: rig.lng});
    }
    this.openWindow(rig.id);
  }
}
