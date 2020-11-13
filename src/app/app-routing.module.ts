import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/login'
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'messages',
  component: MessagesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
