import { Component, OnInit } from '@angular/core';
import {RigService} from '../shared/services/rig.service';
import {Rig} from '../shared/models/rig';
import {forEach} from '@angular/router/src/utils/collection';
import {GoogleMapsAPIWrapper} from '@agm/core';
import {google} from '@agm/core/services/google-maps-types';

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
  map: any;
  isCollapsed = false;
  openedWindow = 0;
  input: any;
  zoom = 6;
  nullLabel = false;

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
        for (const rig of this.rigs) {
          if (rig.label === undefined) {
            rig.label = ' ';
            this.nullLabel = true;
          }
        }
      });
  }

  showMarkerOnMap(rig: Rig) {
    if (this.map) {
      this.map.setCenter({lat: rig.locations[0].latitude, lng: rig.locations[0].longitude});
    }
    this.openWindow(rig.imo);
  }

  mapReady(map) {
    this.map = map;
  }
}
