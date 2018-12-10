import {Component, OnDestroy, OnInit} from '@angular/core';
import {RigService} from '../../shared/services/rig.service';
import {Rig} from '../../shared/models/rig';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TokenService} from '../../shared/services/token.service';
import {switchMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rig-list',
  templateUrl: './rig-list.component.html',
  styleUrls: ['./rig-list.component.css']
})
export class RigListComponent implements OnInit {
  rigs: Rig[];
  rigID: number;
  admin = false;

  constructor(
    private rigService: RigService,
    private modalService: NgbModal,
    private tokenService: TokenService) { }

  ngOnInit() {
    this.rigService.getRigs().subscribe(rigList => {
      this.rigs = rigList;
    });

    this.admin = !!this.tokenService.isAdmin();

    console.log('Admin is: ' + this.admin);
  }


  deleteRig(id: number) {
    // this.rigService.deleteFakeRig(id);
    this.rigService.deleteRig(id);
    this.refresh();
  }

  open(content, rig: Rig) {
    this.rigID = rig.id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  refresh() {
    // this.rigs = this.rigService.getFakeRigs();
    this.rigService.getRigs().subscribe(rigList => {
      this.rigs = rigList;
    });
  }
}
