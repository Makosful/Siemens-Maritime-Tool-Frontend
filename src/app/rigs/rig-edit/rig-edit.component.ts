import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RigService} from '../../shared/services/rig.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rig-edit',
  templateUrl: './rig-edit.component.html',
  styleUrls: ['./rig-edit.component.css']
})
export class RigEditComponent implements OnInit {
    id: number;

    rigForm = new FormGroup({
    id: new FormControl(''),
    label: new FormControl(''),
    type: new FormControl(''),

  });

  constructor(private route: ActivatedRoute, private router: Router, private rigService: RigService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.rigService.getRigById(this.id).subscribe(rigFromApi => {
      this.rigForm.patchValue({
        id: rigFromApi.id,
        label: rigFromApi.label,
        type: rigFromApi.type,
      });
    });
  }

  editRig() {
    const rig = this.rigForm.value;
    rig.id = this.id;
    this.rigService.updateRig(rig).subscribe(rigUpd => {
      this.router.navigateByUrl('/rigs'); // return to list of rigs when done updating
    });
  }
}
