import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './componants/registration/registration.component';
import { HomeComponent } from './componants/home/home.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
