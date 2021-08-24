import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RegistrationsComponent } from './pages/registrations/registrations.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { RegistrationDetailsComponent } from './pages/registration-details/registration-details.component';
import { IeslYmsComponent } from './pages/iesl-yms/iesl-yms.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/:id', component: ProjectDetailsComponent},
  {path: 'registrations', component: RegistrationsComponent},
  {path: 'registrations/:id', component: RegistrationDetailsComponent},
  {path: 'yms', component: IeslYmsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
