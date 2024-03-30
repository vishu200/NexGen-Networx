import { animate, style, transition, trigger } from '@angular/animations';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-raise-issue-nav',
  templateUrl: './raise-issue-nav.component.html',
  styleUrls: ['./raise-issue-nav.component.css'],
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
  ]
})
export class RaiseIssueNavComponent implements DoCheck {



  length = 0; // Initially, set based on localStorage length
  showTooltip = false

  userdetails={
    userId:localStorage.getItem('userId'),
    userName:localStorage.getItem('userName'),
  }

  constructor() {
    this.length = localStorage.length; // Initialize length based on current localStorage state
  }

  // Angular does not normally detect changes in localStorage automatically,
  // ngDoCheck allows us to implement a manual check
  ngDoCheck(): void {
    const currentLength = localStorage.length;
    if (this.length !== currentLength) {
      this.length = currentLength; // Update length if it has changed
    }
  }
  
  logout(): void {
    localStorage.clear();
    this.length = 0; // Update length after clearing localStorage
    // Optionally, add logic to redirect to the login or home page
  }
}
