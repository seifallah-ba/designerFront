import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {StepperComponent} from './stepper/stepper.component';
import {ProjectsComponent} from "./projects/projects.component";
import {ChangeCredentialsComponent} from "./change-credentials/change-credentials.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'credentials', component: ChangeCredentialsComponent},
  {path: 'stepper', component: StepperComponent},
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
