import { Component, OnInit } from '@angular/core';
import {RigService} from '../shared/services/rig.service';
import {MapService} from '../shared/services/map.service';
import {Rig} from '../shared/models/rig';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {google, GoogleMap} from '@agm/core/services/google-maps-types';
import {GoogleMapsAPIWrapper} from '@agm/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './goggle-map.component.html',
  styleUrls: ['./goggle-map.component.css']
})
export class GoggleMapComponent implements OnInit {
  // EASV geo location
  latitude = 55.487784;
  longitude = 8.446826;
  infoWindow;

  rigs: Rig[];
  gMap: any;
  isCollapsed = false;
  markers: any;

  constructor(private rigService: RigService, private mapService: MapService) { }

  protected mapReady(map) {
    this.gMap = map;
  }

  hoverOn(event) {
    console.log(event);
    // debugging
  }

  hoverOff(event) {
    console.log(event);
    // debugging
  }

  clickedMarker(window) {
    if (this.infoWindow) {
      this.infoWindow.close();
    }
    this.infoWindow = window;
  }

  ngOnInit() {
    // TODO revert this
    this.rigs = this.rigService.getFakeRigs();
    // return this.rigService.getRigs();
  }

  searchRig = (text$: Observable<string>) => text$.pipe(debounceTime(750), distinctUntilChanged(),
    map(userInput => userInput.length < 3 ? [] : this.rigs.filter(rig => rig.name.toLowerCase().startsWith(userInput.toLocaleLowerCase()))))

  // TODO fix (finds object, needs to find object name)

  showMarkerOnMap(rig: Rig) {
    if (this.gMap) {
      this.gMap.setCenter({ lat: rig.lat, lng: rig.lng});
    }
    console.log('clicked', rig, { lat: rig.lat, lng: rig.lng});
  }
}
