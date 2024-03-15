import { Component } from '@angular/core';
//Material Impots
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
//Service
import { WeatherService } from '../../services/weather.service';

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
    MatExpansionModule
  ],
})

export class WelcomeComponent {
  isMenuOpen = true;
  panelOpenState = false;
  city = 'Tokyo';
  currentWeather: any;

  constructor(
  ){}



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onMenuOpened() {
    this.isMenuOpen = false;
    console.log('Menú abierto');
  }

  onMenuClosed() {
    this.isMenuOpen = false;
    console.log('Menú cerrado');
  }
}
