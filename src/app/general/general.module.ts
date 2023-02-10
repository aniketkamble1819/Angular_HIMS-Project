import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { LandingComponent } from './landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SheredModule } from "../shered/shered.module";


@NgModule({
    declarations: [
        LandingComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        GeneralRoutingModule,
        SheredModule
    ]
})
export class GeneralModule { }
