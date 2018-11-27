import { Component, OnInit } from '@angular/core';
import {RigService} from '../../shared/services/rig.service';
import {Rig} from '../../shared/models/rig';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rig-details',
  templateUrl: './rig-details.component.html',
  styleUrls: ['./rig-details.component.css']
})
export class RigDetailsComponent implements OnInit {
  rig: Rig;
  constructor(private rigService: RigService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rig = this.rigService.getRigById(id);
  }
}
