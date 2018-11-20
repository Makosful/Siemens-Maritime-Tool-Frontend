import { Injectable } from '@angular/core';
import {Rig} from '../models/rig';

@Injectable({
  providedIn: 'root'
})
export class RigService {
  apiUrl = null ; // TODO set API Url

  rigs: Rig[];

  constructor() { }
}
