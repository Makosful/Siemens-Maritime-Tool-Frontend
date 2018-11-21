import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import {AgmCoreModule} from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GooglemapComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDT0gn3ZgNZG_WfgXSgANlmK-5Zkhhxm6s'}),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
