import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GoggleMapComponent } from './map/goggle-map.component';
import {AgmCoreModule} from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmJsMarkerClustererModule} from '@agm/js-marker-clusterer';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { RigListComponent } from './rigs/rig-list/rig-list.component';
import { RigDetailsComponent } from './rigs/rig-details/rig-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RigAddComponent } from './rigs/rig-add/rig-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RigEditComponent } from './rigs/rig-edit/rig-edit.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GoggleMapComponent,
    LandingComponent,
    RigListComponent,
    RigDetailsComponent,
    RigAddComponent,
    RigEditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDT0gn3ZgNZG_WfgXSgANlmK-5Zkhhxm6s'}),
    HttpClientModule,
    AgmJsMarkerClustererModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
