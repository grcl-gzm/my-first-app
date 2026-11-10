import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Graciela Gozum';
  location = 'Angeles City';
  email = 'graciela.gozum4@gmail.com';
  phone = '0917 812 1234';

  profile = 'I am a student interested in web development. I enjoy learning new technologies and building useful applications.';

  skills = [
    'HTML and CSS',
    'Figma',
    'MongoDB',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
