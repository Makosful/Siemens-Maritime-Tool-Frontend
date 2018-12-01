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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RigAddComponent } from './rigs/rig-add/rig-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RigEditComponent } from './rigs/rig-edit/rig-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './auth/login/login.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule, MatInputModule,
  MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RigDetailsComponent} from './rigs/rig-details/rig-details.component';

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
    AppRoutingModule,

    // material
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatPaginatorModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
