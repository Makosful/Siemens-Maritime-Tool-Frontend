import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {CollapseModule} from 'ngx-bootstrap';
import { GooglemapComponent } from './googlemap/googlemap.component';
import {AgmCoreModule} from '@agm/core';
import { RigListComponent } from './Rig/rig-list/rig-list.component';
import { RigActivityListComponent } from './rigs/rig-activity-list/rig-activity-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GooglemapComponent,
    RigListComponent,
    RigActivityListComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDT0gn3ZgNZG_WfgXSgANlmK-5Zkhhxm6s'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
