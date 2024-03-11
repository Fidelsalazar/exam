import { Component } from '@angular/core';
//Material Impots
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class WelcomeComponent {
  isMenuOpen = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onMenuOpened() {
    this.isMenuOpen = false;
    console.log('close');
  }
  onMenuClosed() {
    this.isMenuOpen = false;
    console.log('close');
  }
}
