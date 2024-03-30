import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Console, log } from 'console';
import { LoginserviceService } from 'src/app/Services/login/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginserviceService],
  animations: [
    trigger('popupAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(100%)' })),
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  showPopup = false;
  popupType:'success' | 'error';

  popupMessage = ''; // Added to store the popup message

  showPopupMessage(message: string, type: 'success' | 'error') {
    this.popupMessage = message;
    this.popupType = type;
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 1000);
  }
  
  

  ngOnInit(): void {
  }
  email:string='';
  password:string='';

  constructor(private loginService:LoginserviceService,private router: Router) { this.popupType = 'error';}

  onLogin(): void {
    this.loginService.loginUser({email: this.email, password: this.password}).subscribe({
      next: (response) => {
        console.log("Login successful", response);
        const responses = JSON.parse(response);
        localStorage.clear();
        console.log("Parsed response object:", responses);
  
        if (responses && responses.id) {
          localStorage.setItem('userId', JSON.stringify(responses.id));
          localStorage.setItem('userName', JSON.stringify(responses.name));
          localStorage.setItem('userEmail', JSON.stringify(responses.email));
          localStorage.setItem('userPhnNo', JSON.stringify(responses.phoneNo));
          window.dispatchEvent(new Event('userLoggedIn'));

        } else {
          console.error("id is undefined in the response");
        }
      console.log(localStorage)


        
        this.showPopupMessage('Login Successful!','success');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      error: (error) => {
        console.error("Login failed", error);
        this.showPopupMessage('Login Failed. Please try again.',error);
      }
    });
  }
  

}
