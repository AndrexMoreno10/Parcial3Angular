import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { GamerComponent } from './pages/gamer/gamer.component';
import { InvitadoComponent } from './pages/invitado/invitado.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { GamerDashboardComponent } from '../gamer-dashboard/gamer-dashboard.component';
import { InvitadoDashboardComponent } from '../invitado-dashboard/invitado-dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    GamerDashboardComponent,
    InvitadoDashboardComponent,
    HeaderComponent,
 


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    
    
  ],
  exports:[
    AdminDashboardComponent,
    GamerDashboardComponent,
    InvitadoDashboardComponent,
    HeaderComponent,

  ]
  
})
export class DashboardModule { }
