import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {GoggleMapComponent} from './map/goggle-map.component';
import {RigListComponent} from './rigs/rig-list/rig-list.component';
import {RigDetailsComponent} from './rigs/rig-details/rig-details.component';
import {RigEditComponent} from './rigs/rig-edit/rig-edit.component';
import {LoginComponent} from './auth/login/login.component';
import {Admin} from './auth/guards/admin';
import {AuthGuard} from './auth/guards/auth.guard';
import {RigAddComponent} from './rigs/rig-add/rig-add.component';

const routes: Routes = [
  {path: '', component: LandingComponent, canActivate: [AuthGuard]},
  {path: 'map', component: GoggleMapComponent },
  {path: 'rigs', component: RigListComponent },
  {path: 'rigs/:imo', component:  RigDetailsComponent },
  {path: 'rigs/edit-rig/:imo', component: RigEditComponent },
  {path: 'rigs/add-rig', component: RigAddComponent },
  {path: 'login', component: LoginComponent },
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
