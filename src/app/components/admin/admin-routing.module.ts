import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './body/users/users.component';
import { AdminComponent } from './admin.component';
import { AgencyComponent } from './body/agency/agency.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
        // outlet: 'admin',
      },
      {
        path: 'agency',
        component: AgencyComponent,
        // outlet: 'admin',
      },
    ],
  },
  // { path: '', redirectTo: '/admin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
