import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RigService} from '../../shared/services/rig.service';
import {FormControl, FormGroup} from '@angular/forms';
import {TokenService} from '../../shared/services/token.service';
import {Rig} from '../../shared/models/rig';

@Component({
  selector: 'app-rig-edit',
  templateUrl: './rig-edit.component.html',
  styleUrls: ['./rig-edit.component.css']
})
export class RigEditComponent implements OnInit {
  rigForm = new FormGroup({
    imo: new FormControl(''),
    label: new FormControl(''),
    type: new FormControl(''),
  });

  imo: number;
  rig: Rig;

  constructor(private route: ActivatedRoute, private router: Router, private rigService: RigService, private tokenService: TokenService) { }

  ngOnInit() {
    this.imo = +this.route.snapshot.paramMap.get('imo');
    this.rigService.getRigById(this.imo).subscribe(rigFromApi => {
      this.rigForm.patchValue({
        label: rigFromApi.label,
        type: rigFromApi.type,
      });
    });
  }

  editRig() {
    const rig = this.rigForm.value;
    rig.imo = this.imo;
    this.rigService.updateRig(rig).subscribe(rigUpd => {
      this.router.navigateByUrl('/rigs'); // return to list of rigs when done updating
    });
  }
}
