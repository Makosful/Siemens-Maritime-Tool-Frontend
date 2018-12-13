import { Component, OnInit } from '@angular/core';
import {RigService} from '../shared/services/rig.service';
import {Rig} from '../shared/models/rig';

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

  rigs: Rig[];
  gMap: any;
  isCollapsed = false;
  openedWindow = 0;
  input: any;
  zoom = 6;

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
    this.rigService.getRigs(0, 0) // 0 indicating that we retrieve all unfiltered.
      .subscribe(pagedList => {
        // Paged list contains the actual list and the amount of items in the list
        this.rigs = pagedList.list;
        console.log(pagedList);
      });
  }

  showMarkerOnMap(rig: Rig) {
    if (this.gMap) {
      this.gMap.setCenter({ lat: rig.locations[0].latitude, lng: rig.locations[0].longitude});
    }
    this.openWindow(rig.imo);
  }
}
