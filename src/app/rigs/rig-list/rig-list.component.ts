import {Component, OnInit} from '@angular/core';
import {RigService} from '../../shared/services/rig.service';
import {Rig} from '../../shared/models/rig';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TokenService} from '../../shared/services/token.service';
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-rig-list',
  templateUrl: './rig-list.component.html',
  styleUrls: ['./rig-list.component.css']
})
export class RigListComponent implements OnInit {
  rigs: Rig[];
  rigID: number;

  admin = false;
   filter = '';
   maxSize = 7;
   directionLinks = true;
   autoHide = false;
   responsive = false;
   config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  };
   labels = {
    previousLabel: 'Prev',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  count: number;
  input: any;

  constructor(private rigService: RigService, private modalService: NgbModal, private tokenService: TokenService) { }

  ngOnInit() {
    this.refresh();

    this.admin = !!this.tokenService.isAdmin();
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  deleteRig(id: number) {
    // this.rigService.deleteFakeRig(id);
    this.rigService.deleteRig(id);
    this.refresh();
  }

  open(content, rig: Rig) {
    this.rigID = rig.imo;
    this.modalService.open(content, {ariaLabelledBy: 'modal'});
  }

  refresh() {
    this.rigService.getRigs(0, 0) // 0 = get all, no backend paging
      .subscribe(pagedList => {
        // Paged list contains the actual list and the amount of items in the list
        this.count = pagedList.count;
        this.rigs = pagedList.list;
        console.log(pagedList);
    });
  }
}
