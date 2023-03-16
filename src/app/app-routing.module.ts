import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogonComponent } from './components/logon/logon.component';
import { PrincipalComponent } from './components/principal/principal.component';

import { AuthGuard } from './guards/auth.guard';
import { LogonGuard } from './guards/logon.guard';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'home', component: HomeComponent, canActivate: [LogonGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logon', component: LogonComponent },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
