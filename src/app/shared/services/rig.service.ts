import { Injectable } from '@angular/core';
import {Rig} from '../models/rig';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RigService {
  apiUrl = null ; // TODO set API Url
  baseUrl = null;
  rigs: Rig[];
  id = 1;
  constructor(private httpclient: HttpClient) {
    this.rigs = [
      {
        id: this.id,
        imo: 8767288, // IMO
        label: 'M.I', // initials
        name: 'Maersk Inspirer', // name
        lat: 55.88083343, // latitude
        lng: 8.66022396, // longitude
        type: 'Jackup', // type
        timeStamp: null, // position received timestamp
        status: null, // status
        area: null, // area
      },
      {
        id: ++this.id,
        imo: 12345678, // IMO
        label: 'T.R', // initials
        name: 'Test Rig', // name
        lat: 55.68083343, // latitude
        lng: 8.86022396, // longitude
        type: 'Semi Submersible', // type
        timeStamp: null, // position received timestamp
        status: null, // status
        area: null, // area
      },
      {
        id: ++this.id,
        imo: 12345678, // IMO
        label: 'T.R.1', // initials
        name: 'Test Rig 1', // name
        lat: 55.68093343, // latitude
        lng: 8.86062396, // longitude
        type: 'Semi Submersible', // type
        timeStamp: null, // position received timestamp
        status: null, // status
        area: null, // area
      },
      {
        id: ++this.id,
        imo: 12345678, // IMO
        label: 'T.R.2', // initials
        name: 'Test Rig 2', // name
        lat: 55.68383343, // latitude
        lng: 8.86122396, // longitude
        type: 'Jackup', // type
        timeStamp: null, // position received timestamp
        status: null, // status
        area: null, // area
      },
      {
        id: ++this.id,
        imo: 12345679, // IMO
        label: 'T.R.3', // initials
        name: 'Test Rig 3', // name
        lat: 55.68583343, // latitude
        lng: 8.86222396, // longitude
        type: 'Semi Submersible', // type
        timeStamp: null, // position received timestamp
        status: null, // status
        area: null, // area
      },
    ];
  }

  getFakeRigs() {
    return this.rigs;
  }

  getFakeRigById(id: number) {
    return this.rigs.find(rig => rig.id === id);
  }

  deleteFakeRig(id: number) {
    this.rigs = this.rigs.filter(rig => rig.id !== id);
  }

  updateFakeRig(rig: Rig) {
    // TODO Call Rest API later!!!!
    const rigToUpdate = this.rigs.find(r => rig.id === r.id);
    const index = this.rigs.indexOf(rigToUpdate);
    this.rigs[index] = rig;
  }

  addFakeRig(rig: Rig) {
    // TODO Call Rest API later!!!!
    rig.id = this.id++;
    this.rigs.push(rig);
  }

  // REAL REQUESTS BELOW

  getRigs(): Observable<Rig[]> {
    // return this.rigs;
    return this.httpclient.get<Rig[]>(this.apiUrl);
  }

  getRigById(id: number): Observable<Rig> {
    // return this.rigs.find(rig => rig.id === id);
    return this.httpclient.get<Rig>(this.apiUrl + '/' + id);
  }

  addRig(rig: Rig): Observable<Rig> {
    /*rig.id = this.id++;
    this.rigs.push(rig);*/
    return this.httpclient.post<Rig>(this.apiUrl, rig);
  }

  updateRig(rig: Rig): Observable<Rig> {
    /*const rigUpdate = this.rigs.find(r => r.id === rig.id);
    const i = this.rigs.indexOf(rigUpdate);
    this.rigs[i] = rig;*/
    return this.httpclient.put<Rig>(this.apiUrl + '/' + rig.id, rig);
  }

  deleteRig(id: number): Observable<any> {
    return this.httpclient.delete(this.apiUrl + '/' + id);
    // this.rigs = this.rigs.filter(rig => rig.id !== id);
  }
}
