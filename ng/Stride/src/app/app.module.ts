import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChooseABalloonComponent } from './choose-aballoon/choose-aballoon.component';
import { BalloonComponent } from './balloon/balloon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChooseABalloonComponent,
    BalloonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
