import { Injectable } from '@angular/core';
import {RigService} from './rig.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private rigService: RigService) {
  }
}
