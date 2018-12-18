import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RigService} from '../../shared/services/rig.service';
import {Rig} from '../../shared/models/rig';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-rig-edit',
  templateUrl: './rig-edit.component.html',
  styleUrls: ['./rig-edit.component.css']
})
export class RigEditComponent implements OnInit {
  notifier: NotifierService;
  success = false;
  rig: Rig;
  newRig: Rig;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rigService: RigService,
    private notifyService: NotifierService) {
    this.notifier = notifyService;
  }

  ngOnInit() {
    const imo = +this.route.snapshot.paramMap.get('imo');
    this.rigService.getRigById(imo).subscribe(rigFromApi => {
      this.rig = rigFromApi;
      this.newRig = new Rig();
      this.newRig.name = this.rig.name;
      this.newRig.rigType = this.rig.rigType;
      this.newRig.imo = this.rig.imo;
    });
  }

  editRig() {
    this.rigService.updateRig(this.newRig).subscribe(() => {
      this.success = true;
      this.showNotification();
      this.router.navigateByUrl('/rigs'); // return to list of rigs when done updating
    });
  }

  showNotification(): void {
    if (this.success) {
      this.notifier.notify('success', 'Successfully edited the rig!');
    }
  }
}
