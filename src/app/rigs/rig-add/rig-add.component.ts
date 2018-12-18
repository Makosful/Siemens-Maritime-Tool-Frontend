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
  successful = false;
  imo: number;

  constructor(private rigService: RigService, private router: Router, notifyService: NotifierService) { this.notifier = notifyService; }

  ngOnInit() {
  }

  addRig() {
    const rig = new Rig();
    rig.imo = this.imo;
    this.rigService.addRig(rig).subscribe(success => {
      this.successful = true;
      this.showNotification();
      this.router.navigateByUrl('/rigs');
    },
      error => {
      this.showNotification();
      });
  }

  showNotification(): void {
    if (this.successful) {
      this.notifier.notify('success', 'Successfully added the rig!');
    } else {
      this.notifier.notify('error', 'There was an error adding the rig!');
    }
  }
}
