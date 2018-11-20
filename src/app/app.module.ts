import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {CollapseModule} from 'ngx-bootstrap';
import { GooglemapComponent } from './googlemap/googlemap.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GooglemapComponent,
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
