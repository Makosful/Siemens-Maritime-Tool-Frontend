import { Component, OnInit } from '@angular/core';
import {RigService} from '../../shared/services/rig.service';
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
    type: new FormControl(''),

  });

  constructor(private rigService: RigService, private router: Router) { }

  ngOnInit() {
  }

  checkRig() {
    return null;
  }
}
