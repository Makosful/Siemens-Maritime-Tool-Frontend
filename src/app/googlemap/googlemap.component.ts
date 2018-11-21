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
      lng: 8.44626,
      color: '#006400'
    },
    {
      id: 2,
      label: 'B',
      name: 'Rig B',
      lat: 55.13967029,
      lng: 8.05001652,
      color: '#DEB887'
    },
    {
      id: 3,
      label: 'C',
      name: 'Rig C',
      lat: 55.36555896,
      lng: 8.06757050,
      color: '#808080'
    },
    {
      id: 4,
      label: '158372',
      name: 'Maersk Inspirer',
      lat: 55.49403520,
      lng: 7.68609000,
      color: '#483D8B'
    },
    {
      id: 5,
      label: '158372',
      name: 'Maersk Inspirer',
      lat: 55.81026164,
      lng: 8.26033168,
      color: '#D2691E'
    },
    {
      id: 6,
      label: '158372',
      name: 'Maersk Inspirer',
      lat: 55.75057218,
      lng: 8.05423435,
      color: '#00CED1'
    },
    {
      id: 7,
      label: '158372',
      name: 'Maersk Inspirer',
      lat: 55.69081734,
      lng: 8.37228274,
      color: '#ADFF2F'
    },
    {
      id: 8,
      label: '158372',
      name: 'Maersk Inspirer',
      lat: 55.83962517,
      lng: 8.87941720,
      color: '#800080'
    },
    {
      id: 9,
      label: '158372',
      name: 'Maersk Inspirer',
      lat: 55.72707792,
      lng: 8.49290878,
      color: '#006400'
    },
    {
      id: 10,
      label: '158372',
      name: 'Maersk Inspirer',
      lat: 55.88083343,
      lng: 8.66022396,
      color: '#FF00FF'
    },
  ];

  // EASV geo location
  latitude = 55.487784;
  longitude = 8.446826;
  infoWindow;

  // boolean for ngIf check for hovering
  hovering = false;
  isOpen = false;

  constructor(private rigService: RigService, private map: MapService ) { }

 // mouse-over = hoverOn mouse-out = hoverOff
  hoverOn(event) {
    console.log(event);
    // debugging
  }

  hoverOff(event) {
    console.log(event);
    // debugging
  }

  clickedMarker(infowindow) {
    if (this.infoWindow) {
      this.infoWindow.close();
    }
    this.infoWindow = infowindow;
  }

  ngOnInit() {
  }

}
