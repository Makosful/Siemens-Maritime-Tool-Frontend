import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {GoggleMapComponent} from './googlemap/goggle-map.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'map', component: GoggleMapComponent },
  // TODO rig list {path: '/rigs', component:  },
  // TODO rig id {path: '/rigs/:id', component:  },
  // TODO rig edit {path: '/edit-rig/:id', component:  },
  // TODO rig add {path: '/add-rig', component:  },
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
