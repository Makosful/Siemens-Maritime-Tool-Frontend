import { Injectable } from '@angular/core';
import {Rig} from '../models/rig';

@Injectable({
  providedIn: 'root'
})
export class RigService {
  apiUrl = null ; // TODO set API Url

  rigs: Rig[];
  id = 1;
  constructor() {
    this.rigs = [
      {
        id: this.id++,
        label: 'A',
        name: 'Rig A',
        lat: 55.487784,
        lng: 8.44626,
        color: '#006400'
      },
      {
        id: this.id++,
        label: 'B',
        name: 'Rig B',
        lat: 55.13967029,
        lng: 8.05001652,
        color: '#DEB887'
      },
      {
        id: this.id++,
        label: 'C',
        name: 'Rig C',
        lat: 55.36555896,
        lng: 8.06757050,
        color: '#808080'
      },
      {
        id: this.id++,
        label: 'D',
        name: 'Rig D',
        lat: 55.49403520,
        lng: 7.68609000,
        color: '#483D8B'
      },
      {
        id: this.id++,
        label: 'E',
        name: 'Rig E',
        lat: 55.81026164,
        lng: 8.26033168,
        color: '#D2691E'
      },
      {
        id: this.id++,
        label: 'F',
        name: 'Rig F',
        lat: 55.75057218,
        lng: 8.05423435,
        color: '#00CED1'
      },
      {
        id: this.id++,
        label: 'G',
        name: 'Rig G',
        lat: 55.69081734,
        lng: 8.37228274,
        color: '#ADFF2F'
      },
      {
        id: this.id++,
        label: 'H',
        name: 'Rig H',
        lat: 55.83962517,
        lng: 8.87941720,
        color: '#800080'
      },
      {
        id: this.id++,
        label: 'I',
        name: 'Rig I',
        lat: 55.72707792,
        lng: 8.49290878,
        color: '#006400'
      },
      {
        id: 158372,
        label: 'M.I',
        name: 'Maersk Inspirer',
        lat: 55.88083343,
        lng: 8.66022396,
        color: '#252525'
      },
    ];
  }

  getRigs(): Rig[] {
    return this.rigs;
  }

  getRigById(id: number) {
    return this.rigs.find(rig => rig.id === id);
  }

  addRig(rig: Rig) {
    rig.id = this.id++;
    this.rigs.push(rig);
  }

  updateRig(rig: Rig) {
    const rigUpdate = this.rigs.find(r => r.id === rig.id);
    const i = this.rigs.indexOf(rigUpdate);
    this.rigs[i] = rig;
  }

  deleteRig(id: number) {
    this.rigs = this.rigs.filter(rig => rig.id !== id);
    console.log(id);
  }
}
