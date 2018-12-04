import { Pipe, PipeTransform } from '@angular/core';
import {Rig} from '../shared/models/rig';

@Pipe({
  name: 'filterRigs'
})
export class FilterRigsPipe implements PipeTransform {

  transform(rigs: Rig[], input: any): any {
    if (input === undefined) { return rigs; } else {
      return rigs.filter(function (rig) {return rig.name.toLowerCase().includes(input.toLowerCase()); });
    }
  }

}
