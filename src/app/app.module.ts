import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GoggleMapComponent } from './googlemap/goggle-map.component';
import {AgmCoreModule} from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmJsMarkerClustererModule} from '@agm/js-marker-clusterer';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { RigListComponent } from './rigs/rig-list/rig-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GoggleMapComponent,
    LandingComponent,
    RigListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDT0gn3ZgNZG_WfgXSgANlmK-5Zkhhxm6s'}),
    NgbModule,
    AgmJsMarkerClustererModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
