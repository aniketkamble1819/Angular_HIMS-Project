import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { GendersComponent } from './genders/genders.component';
import { LandingComponent } from './landing.component';
import { SheredModule } from "../shered/shered.module";


@NgModule({
    declarations: [
        GendersComponent,
        LandingComponent
    ],
    imports: [
        CommonModule,
        MasterRoutingModule,
        SheredModule
    ]
})
export class MasterModule { }
