import {Injectable} from '@angular/core';
import {Rig} from '../models/rig';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';
import {TokenService} from './token.service';
import {PagedRigs} from '../models/rigs-paged';

@Injectable({
  providedIn: 'root'
})
export class RigService {
  apiUrl = environment.apiUrl + '/api' + '/rigs';
  rigs: Rig[];
  id = 1;

  constructor(private httpclient: HttpClient, private token: TokenService) {
    /* this.rigs = [
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
        lat: 54.5458952, // latitude
        lng: 7.80766282, // longitude
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
        lat: 56.28678858, // latitude
        lng: 8.91543887, // longitude
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
        lat: 54.67637221, // latitude
        lng: 10.37901072, // longitude
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
        lat: 55.85055695, // latitude
        lng: 10.17336934, // longitude
        type: 'Semi Submersible', // type
        timeStamp: null, // position received timestamp
        status: null, // status
        area: null, // area
      },
    ];
    */
  }

  getFakeRigs() {
    // return this.rigs;
  }

  getFakeRigById(id: number) {
    // return this.rigs.find(rig => rig.id === id);
  }

  deleteFakeRig(id: number) {
    // this.rigs = this.rigs.filter(rig => rig.id !== id);
  }

  updateFakeRig(rig: Rig) {
    /* const rigToUpdate = this.rigs.find(r => rig.id === r.id);
    const index = this.rigs.indexOf(rigToUpdate);
    this.rigs[index] = rig; */
  }

  addFakeRig(rig: Rig) {
    /* rig.id = this.id++;
    this.rigs.push(rig); */
  }

  // REAL REQUESTS BELOW

  getRigs(currentPage: number, itemsPerPage: number): Observable<PagedRigs> {
    const t = this.token.getHttpOptions();

    // Params sat like this adds the ? and & to the API call link
    t.params = new HttpParams()
      .set('currentPage', currentPage.toString()) // Must be strings
      .set('itemsPerPage', itemsPerPage.toString());

    // Notice it returns a PagedRigs object instead of an array of anything
    return this.httpclient.get<PagedRigs>(this.apiUrl, t);
  }

  getRigById(id: number): Observable<Rig> {
    debugger;
    return this.httpclient.get<Rig>(this.apiUrl + '/' + id);
  }

  addRig(rig: Rig): Observable<Rig> {
    return this.httpclient.post<Rig>(this.apiUrl, rig, this.token.getHttpOptions());
  }

  updateRig(rig: Rig): Observable<Rig> {
    console.log(this.token.getHttpOptions().headers.get('Authorization'));
    return this.httpclient.put<Rig>(this.apiUrl + '/' + rig.imo, rig, this.token.getHttpOptions());
  }

  deleteRig(id: number): Observable<any> {
    return this.httpclient.delete(this.apiUrl + '/' + id, this.token.getHttpOptions());
  }
}
