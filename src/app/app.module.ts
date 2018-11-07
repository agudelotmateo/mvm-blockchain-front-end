import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewAgentsComponent } from './view-agents/view-agents.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateRegulatorComponent } from './create-regulator/create-regulator.component';
import { ViewRegulatorsComponent } from './view-regulators/view-regulators.component';
import { CreateCondenserDeclarationComponent } from './create-condenser-declaration/create-condenser-declaration.component';
import { LoginComponent } from './login/login.component';
import { ViewCondenserDeclarationsComponent } from './view-condenser-declarations/view-condenser-declarations.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';
import { SidenavAgenteComponent } from './sidenav-agente/sidenav-agente.component';
import { SidenavXmComponent } from './sidenav-xm/sidenav-xm.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeAgenteComponent } from './home-agente/home-agente.component';
import { HomeRegulatorComponent } from './home-regulator/home-regulator.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateReactorDeclarationComponent } from './create-reactor-declaration/create-reactor-declaration.component';
import { ViewReactorDeclarationsComponent } from './view-reactor-declarations/view-reactor-declarations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAgentComponent,
    ViewAgentsComponent,
    CreateAgentComponent,
    CreateRegulatorComponent,
    ViewRegulatorsComponent,
    CreateCondenserDeclarationComponent,
    LoginComponent,
    ViewCondenserDeclarationsComponent,
    SidenavAdminComponent,
    SidenavAgenteComponent,
    SidenavXmComponent,
    HomeAdminComponent,
    HomeAgenteComponent,
    HomeRegulatorComponent,
    LogoutComponent,
    CreateReactorDeclarationComponent,
    ViewReactorDeclarationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
