import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpFormComponent } from './auth/sign-up-form/sign-up-form.component'

const routes: Routes = [
  {path: 'registration', component: SignUpFormComponent},
  {path: '', redirectTo: 'registration', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
