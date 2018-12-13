import {Component, OnInit} from '@angular/core';
import {RigService} from '../../shared/services/rig.service';
import {Rig} from '../../shared/models/rig';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TokenService} from '../../shared/services/token.service';

@Component({
  selector: 'app-rig-list',
  templateUrl: './rig-list.component.html',
  styleUrls: ['./rig-list.component.css']
})
export class RigListComponent implements OnInit {
  rigs: Rig[];
  rigID: number;
  admin = false;

  page = 1; // Current page
  items = 5; // Max items per page
  count: number; // Actual amount of items per page

  constructor(
    private rigService: RigService,
    private modalService: NgbModal,
    private tokenService: TokenService) { }

  ngOnInit() {
    // Made this call Refresh instead of running identical code
    this.refresh();

    this.admin = !!this.tokenService.isAdmin();
    // Remove console.log
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
    this.rigService.getRigs(this.page, this.items)
      .subscribe(pagedList => {
        // Paged list contains the actual list and the amount of items in the list
        this.count = pagedList.count;
        this.rigs = pagedList.list;
        console.log(pagedList);
    });
  }
}
