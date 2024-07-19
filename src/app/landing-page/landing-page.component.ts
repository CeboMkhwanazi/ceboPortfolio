import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  profileImage = 'assets/profile.png';
  projects = [
    { img: 'assets/project1.jpg', title: 'Project 1', description: 'Description of project 1.' },
    { img: 'assets/project2.jpg', title: 'AWS Cloud Project', description: 'Description of project 2.' },
    { img: 'assets/project3.jpg', title: 'Project 3', description: 'Description of project 3.' }
  ];
}
