import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RaiseissueService } from 'src/app/Services/raise issue/raiseissue.service'; 

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.css'],
  providers: [RaiseissueService],
  animations: [
    trigger('popupAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(100%)' })),
      ]),
    ]),
  ],
})
export class HomeContactComponent implements OnInit {
  contactForm: FormGroup;
  showPopup = false;
  popupMessage = '';

  constructor(private fb: FormBuilder, private issueService: RaiseissueService) {
    this.contactForm = this.fb.group({
      issueType: ['', Validators.required],
      issueName: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  showPopupMessage(message: string, response?: any) {
    this.popupMessage = message;
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 3000); // Showing the popup for 3 seconds
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(localStorage);
      // const issueData = {
      //   userId: JSON.parse(localStorage.getItem('user') || '{}').id,
      //   ...this.contactForm.value 
      // };
      const userId = localStorage.getItem('userId') || '{}'; // Use 'user', not 'users'

    // Assuming raiseIssue expects an object with userId and issue details
    const issueData = {
      userId: userId, // Use the parsed user ID
      ...this.contactForm.value // Spread the form values
    };
      this.issueService.raiseIssue(issueData).subscribe({
        next: (response) => {
          console.log("Issue raised successfully", response);
          this.showPopupMessage('Issue Submitted Successfully!\n',response);
          this.contactForm.reset(); // Reset the form on success
        },
        error: (error) => {
          console.error("Error submitting data", error);
  
          // Check if the error status is 200, which might indicate a misinterpretation
          if (error.status === 200) {
            // Handle it as a success if necessary or inspect further
            console.log('Received HTTP 200 in error block, might be a success:', error.error);
            this.showPopupMessage('Issue Submitted Successfully!');
            this.contactForm.reset(); // Adjust based on your logic
          } else {
            // Actual error handling
            this.showPopupMessage('Invalid User detail');
          }
        }
      });
    } else {
      this.showPopupMessage('Please fill out all fields correctly.');
    }
  }
  
}
