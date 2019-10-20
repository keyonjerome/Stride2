import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseABalloonComponent } from './choose-aballoon/choose-aballoon.component';
import { HomeComponent } from './home/home.component';
import { BalloonComponent } from './balloon/balloon.component';


const routes: Routes = [
  {
    path: 'choose-a-balloon',
    component:ChooseABalloonComponent
  },
  { path: '',
    component:HomeComponent
  },
  {
    path:'balloon/:id',
    component:BalloonComponent
  },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
