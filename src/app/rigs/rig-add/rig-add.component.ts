import { Component, OnInit } from '@angular/core';
import {RigService} from '../../shared/services/rig.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Rig} from '../../shared/models/rig';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-rig-add',
  templateUrl: './rig-add.component.html',
  styleUrls: ['./rig-add.component.css']
})
export class RigAddComponent implements OnInit {
  notifier: NotifierService;
  success = false;
  rigForm = new FormGroup({
    imo: new FormControl(''),
    label: new FormControl(''),
    type: new FormControl(''),
  });

  constructor(private rigService: RigService, private router: Router, notifyService: NotifierService) { this.notifier = notifyService; }

  ngOnInit() {
  }

  addRig() {
    const rigFromForm = this.rigForm.value;
    const rig = {
      imo: rigFromForm.imo,
      label: rigFromForm.label,
      type: rigFromForm.type,
    };
    this.rigService.addRig(rig as Rig).subscribe(() => {
      this.success = true;
      this.showNotification();
      this.router.navigateByUrl('/rigs');
    });
  }

  showNotification(): void {
    if (this.success) {
      this.notifier.notify('success', 'Successfully added the rig!');
    }
  }
}
