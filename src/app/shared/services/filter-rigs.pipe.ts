import { Pipe, PipeTransform } from '@angular/core';
import {Rig} from '../models/rig';

@Pipe({
  name: 'filterRigs'
})
export class FilterRigsPipe implements PipeTransform {

  transform(rigs: Rig[], input: any): any {
    if (input === undefined) { return rigs; } else {
      return rigs.filter(function (rig) {
        if (rig.name.toLowerCase().includes(input.toLowerCase()) || rig.imo.toString().includes(input.toString())) { return rig; }
      });
    }
  }
}
