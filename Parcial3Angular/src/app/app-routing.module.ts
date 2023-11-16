import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GamerDashboardComponent } from './gamer-dashboard/gamer-dashboard.component';
import { InvitadoDashboardComponent } from './invitado-dashboard/invitado-dashboard.component';

import { authGuard } from './auth/auth.guard';
import { Utils } from './utils/utils';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate:[authGuard],
    children: [
      {path: 'admin', component: AdminDashboardComponent},
      {path: 'gamer', component: GamerDashboardComponent},
      {path: 'invitado', component: InvitadoDashboardComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
