import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { SignInComponent } from './Components/sign-in/sign-in.component'; 
import { LoginComponent } from './Components/login/login.component'; 
import { HomeComponent } from './Components/home/home.component'; 
import { RaiseIssueComponent } from './Components/raise-issue/raise-issue.component'; 
import { RegistrationSignInComponent } from './Components/registration-sign-in/registration-sign-in.component'; 
import { RaiseIssueNavComponent } from './Components/raise-issue-nav/raise-issue-nav.component'; 
import { RegistrationComponent } from './Components/registration/registration.component'; 
import { HomeContactComponent } from './Components/home/home-contact/home-contact.component'; 
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { IssueStatusComponent } from './issue-status/issue-status.component';


const routes:Routes=[{path:'signin',component:SignInComponent},{path:'Login',component:LoginComponent},
{path:'home',component:HomeComponent},{path:'raise-issue-application',component:RaiseIssueComponent},
{path:'login',component:RegistrationComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path:'sign-in',component:RegistrationSignInComponent},
{path:'raise-issue',component:RaiseIssueNavComponent},
{path:'contact',component:HomeContactComponent},
{path:'about',component:AboutPageComponent},
{path:'issueStatus',component:IssueStatusComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class RoutingModuleModule { }
