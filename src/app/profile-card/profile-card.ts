import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = '- I am a student learning to build modern web applications with Angular. I am also interested in UI/UX Design. Currently I am learning how to bring designs to life through code through working on personal projects in Figma and developing them into functional and responsive websites.';

}
