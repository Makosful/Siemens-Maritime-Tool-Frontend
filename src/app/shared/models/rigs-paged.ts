import {Rig} from './rig';

export interface PagedRigs {
  // New class will hold the list and the count. Can be removed, but the front end call stack has to be changed
  // Did it like this because El Bilde.
  list: Rig[];
  count: number;
}
