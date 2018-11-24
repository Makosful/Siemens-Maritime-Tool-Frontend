import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {GoggleMapComponent} from './map/goggle-map.component';
import {RigListComponent} from './rigs/rig-list/rig-list.component';
import {RigDetailsComponent} from './rigs/rig-details/rig-details.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'map', component: GoggleMapComponent },
  {path: 'rigs', component: RigListComponent },
  {path: 'rigs/:id', component:  RigDetailsComponent },
  // TODO rig edit {path: 'edit-rig/:id', component:  },
  // TODO rig add {path: 'add-rig', component:  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
