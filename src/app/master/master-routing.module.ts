import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GendersComponent } from './genders/genders.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {path:"", component:LandingComponent, children:[
    {path:"genders",component:GendersComponent}
  ]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
