import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './body/users/users.component';
import { AgencyComponent } from './body/agency/agency.component';


@NgModule({
  declarations: [
    UsersComponent,
    AgencyComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
