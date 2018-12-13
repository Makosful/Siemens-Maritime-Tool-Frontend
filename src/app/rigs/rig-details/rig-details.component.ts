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
  zoom = 6;

  constructor(private rigService: RigService, private route: ActivatedRoute) { }

  ngOnInit() {
    const imo = +this.route.snapshot.paramMap.get('imo');
    this.rigService.getRigById(imo).subscribe( rigFromApi => {
    this.rig = rigFromApi;
    });
    /* const id = +this.route.snapshot.paramMap.get('id');
    this.rig = this.rigService.getFakeRigById(id); */
  }
}
