import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModuleModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationNavComponent } from './Components/registration-nav/registration-nav.component'; 
import { RegistrationComponent } from './Components/registration/registration.component'; 
import { SignInComponent } from './Components/sign-in/sign-in.component'; 
import { FormsModule } from '@angular/forms';
import { RaiseIssueComponent } from './Components/raise-issue/raise-issue.component'; 
import { HomeComponent } from './Components/home/home.component'; 
import { RaiseIssueNavComponent } from './Components/raise-issue-nav/raise-issue-nav.component'; 
import { RegistrationSignInComponent } from './Components/registration-sign-in/registration-sign-in.component'; 
import { HomeFooterComponent } from './Components/home/home-footer/home-footer.component'; 
import { HomeHeaderComponent } from './Components/home/home-header/home-header.component'; 
import { HomeFunctionsComponent } from './Components/home/home-functions/home-functions.component'; 
import { HomeDataplanComponent } from './Components/home/home-dataplan/home-dataplan.component'; 
import { HomeCustomerReviewComponent } from './Components/home/home-customer-review/home-customer-review.component';
import { HomeContactComponent } from './Components/home/home-contact/home-contact.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { IssueStatusComponent } from './issue-status/issue-status.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationNavComponent,
    RegistrationComponent,
    SignInComponent,
    RegistrationSignInComponent,
    RaiseIssueComponent,
    HomeComponent,
    RaiseIssueNavComponent,
    HomeFooterComponent,
    HomeHeaderComponent,
    HomeFunctionsComponent,
    HomeDataplanComponent,
    HomeCustomerReviewComponent,
    HomeContactComponent,
    AboutPageComponent,
    IssueStatusComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,RoutingModuleModule,ReactiveFormsModule,BrowserAnimationsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
