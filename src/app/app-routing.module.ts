import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ChartComponent} from './../chart/chart.component';
import{PnrComponent} from './../pnr/pnr.component';
import{StayComponent} from './../stay/stay.component';
import{HomeComponent} from './../home/home.component';

import{CancelComponent} from './../cancel/cancel.component';
import { AboutComponent } from '@angular/cli/Railway/src/about/about.component';
const routes: Routes = [
{path:'chart',component:ChartComponent},

{path:'pnr',component:PnrComponent},
{path:'stay',component:StayComponent},
{path:'cancel',component:CancelComponent},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
