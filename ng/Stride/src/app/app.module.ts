import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChooseABalloonComponent } from './choose-aballoon/choose-aballoon.component';
import { BalloonComponent } from './balloon/balloon.component';
import { ParticlesModule } from 'angular-particle';
import {MatButtonModule, MatButtonToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChooseABalloonComponent,
    BalloonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    ParticlesModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
