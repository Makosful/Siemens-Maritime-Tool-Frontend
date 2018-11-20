import { Component, OnInit } from '@angular/core';
import {google} from '@agm/core/services/google-maps-types';
import {RigService} from '../shared/services/rig.service';
import {MapService} from '../shared/services/map.service';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  // EASV geo location
  latitude = 55.487784;
  longitude = 8.446826;

  latlng = {lat: this.latitude, lng: this.longitude};

  // boolean for ngIf check for hovering
  hovering = false;

  constructor(private rigService: RigService, private map: MapService ) { }

 // mouse-over = hoverOn mouse-out = hoverOff
  hoverOn(event) {
    console.log(event);
    this.hovering = true;
  }

  hoverOff(event) {
    console.log(event);
    this.hovering = false;
  }

  ngOnInit() {
  }

}
