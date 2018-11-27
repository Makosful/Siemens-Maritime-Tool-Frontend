import { Component, OnInit } from '@angular/core';
import {RigService} from '../services/rig.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rig-add',
  templateUrl: './rig-add.component.html',
  styleUrls: ['./rig-add.component.css']
})
export class RigAddComponent implements OnInit {

    rigForm = new FormGroup({
    id: new FormControl(''),
    label: new FormControl(''),
    color: new FormControl(''),

  });

    rigFound = false;

  constructor(private rigService: RigService, private router: Router) { }

  ngOnInit() {
  }

  checkRig() {
    const rig = this.rigForm.value;
    this.rigService.addRig(rig);
    this.router.navigateByUrl('/rigs');
  }
}
