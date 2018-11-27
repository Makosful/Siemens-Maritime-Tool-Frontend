import { Component, OnInit } from '@angular/core';
import {RigService} from '../services/rig.service';
import {Rig} from '../models/rig';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rig-list',
  templateUrl: './rig-list.component.html',
  styleUrls: ['./rig-list.component.css']
})
export class RigListComponent implements OnInit {
  rigs: Rig[];
  rigID: number;
  constructor(private rigService: RigService, private modalService: NgbModal) { }

  ngOnInit() {
    this.rigs = this.rigService.getRigs();
  }

  deleteRig(id: number) {
    this.rigService.deleteRig(id);
    this.rigs = this.rigService.getRigs();
  }

  open(content, rig: Rig) {
    this.rigID = rig.id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
