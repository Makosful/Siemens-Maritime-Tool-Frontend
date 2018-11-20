import { Component, OnInit } from '@angular/core';
import {google} from '@agm/core/services/google-maps-types';
import {RigService} from '../shared/services/rig.service';
import {MapService} from '../shared/services/map.service';
import {Rig} from '../shared/models/rig';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  rigs: Rig[] = [
    {
      id: 1,
      label: 'A',
      name: 'Rig A',
      lat: 55.487784,
      lng: 8.44626
    },
    {
      id: 2,
      label: 'B',
      name: 'Rig B',
      lat: 54.487784,
      lng: 8.44626
    },
    {
      id: 3,
      label: 'C',
      name: 'Rig C',
      lat: 53.487784,
      lng: 8.44626
    },
    {
      id: 4,
      label: '158372',
      name: 'Maersk Inspirer',
      lat: 55.487784,
      lng: 8.44626
    },
  ];

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

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  ngOnInit() {
  }

}
