import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
//Material Impots
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
//Service
import { WeatherService } from '../../services/weather.service';
import { Subscription } from 'rxjs';

interface Weather{
  temp: number
}

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

export class WelcomeComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription()

  isMenuOpen = true;
  panelOpenState = false;
  city = 'Tokyo';
  currentWeather: any;
  celcius!: number;

  points={
    'lat': '23.13302',
    'long': '-82.38304',
  }

  constructor(
    private api : WeatherService,
  ){}

  ngOnInit() {
    this.searchWeather();
  }

  searchWeather(){
    this.subscription = this.api.getWeatherData(this.points).subscribe((data:any) =>{
      console.log(data) 
      this.celcius = Math.round(data.main.temp - 273.15);
      console.log('ok',this.celcius)
    })  
  }

  refresh(){
    this.searchWeather();
    console.log('refresh')
  }

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
