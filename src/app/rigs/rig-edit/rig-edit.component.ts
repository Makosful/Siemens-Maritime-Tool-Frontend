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
    color: new FormControl(''),

  });

  constructor(private route: ActivatedRoute, private rigService: RigService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    const rig = this.rigService.getRigById(this.id);
    this.rigForm.patchValue({
      id: rig.id,
      label: rig.label,
      color: rig.color,
    });
  }

  editRig() {
    const rig = this.rigForm.value;
    rig.id = this.id;
    this.rigService.updateRig(rig);
  }
}
