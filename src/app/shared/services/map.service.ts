import { Injectable } from '@angular/core';
import {RigService} from './rig.service';
import {Observable} from 'rxjs';
import {Rig} from '../models/rig';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private rigService: RigService) {
  }

  populateMarkerList() {
    return this.rigService.getFakeRigs();
  }
}
