import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Comp1Component} from './comp1/comp1.component';
import {Comp2Component} from './comp2/comp2.component';
import {Comp3Component} from './comp3/comp3.component';
import {Comp4Component} from './comp4/comp4.component';

const routes: Routes = [
  {path:'', redirectTo:'1', pathMatch:'full'},
  {path:'1',
    component:Comp1Component,
    children: [
      {path:'ch1', component:Comp1Component},
      {path:'ch2', component:Comp2Component}
    ]},
  {path:'2', component:Comp2Component},
  {path:'3', component:Comp3Component},
  {path:'4/:userId', component:Comp4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
