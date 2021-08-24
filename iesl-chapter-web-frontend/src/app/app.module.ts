import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RegistrationsComponent } from './pages/registrations/registrations.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectService } from './services/project.service';
import { RegistrationDetailsComponent } from './pages/registration-details/registration-details.component';
import { IeslYmsComponent } from './pages/iesl-yms/iesl-yms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    RegistrationsComponent,
    ProjectDetailsComponent,
    RegistrationDetailsComponent,
    IeslYmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
