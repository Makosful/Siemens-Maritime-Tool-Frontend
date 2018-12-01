import { Component, OnInit } from '@angular/core';
import {RigService} from '../shared/services/rig.service';
import {MapService} from '../shared/services/map.service';
import {Rig} from '../shared/models/rig';
import {Observable} from 'rxjs';

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
  constructor(private rigService: RigService, private mapService: MapService ) { }

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
    // TODO revert this
    this.rigs = this.rigService.getFakeRigs();
    // return this.rigService.getRigs();
  }
}
