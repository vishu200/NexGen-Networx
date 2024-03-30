import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from 'src/app/Services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
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
export class SignInComponent implements OnInit {

  showPopup = false;
  popupMessage = ''; // Added to store the popup message

  showPopupMessage(message: string) {
    this.popupMessage = message; // Set the message
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 600);
    // No need for a separate setTimeout here to hide the popup if we're navigating away
    // The navigation delay in the signup method will handle this
  }

  ngOnInit(): void {
  }

  signupData={
    name:'',
    phoneNo:'',
    email:'',
    password:''
  };
  constructor(private signupService:SignUpService,private router: Router ) { }
  signup(): void {
    this.signupService.signup(this.signupData).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        // Show success message
        this.showPopupMessage('Signup successful!');
        
        // Delay the navigation to home page to allow the popup to be seen
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000); // Adjust the time as needed for the popup to show
      },
      error: (error) => {
        // Show failure message and do not navigate
        this.showPopupMessage('Signup failed. Please try again.');
        console.error('Signup failed', error);
      }
    });
  
  
   

  }


}
