import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { Page404Component } from '../shared/page404/page404.component';
import { RedirectionAfterOauthComponent } from './redirection-after-oauth/redirection-after-oauth.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // children: [
    //   {
    //     path: 'r',
    //     component: FeedbackComponent,
    //   },
    // ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AuthGuard],
    // data: { auth: 'guest' },
  },
  {
    path: 'redirection-after-oauth',
    component: RedirectionAfterOauthComponent,
  },
  {
    path: '',
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
