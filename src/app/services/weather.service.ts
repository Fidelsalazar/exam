import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private API_KEY = '18929ac8322ed02b521c395fbb4158fe';
  private API_URL = 'https://api.openweathermap.org/data/2.5';

  private currentWeatherSubject = new BehaviorSubject<any>(null);
  currentWeather$ = this.currentWeatherSubject.asObservable();

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string) {
    const url = `${this.API_URL}/weather?q=${city}&appid=${this.API_KEY}`;
    return this.http.get(url);
  }

  getForecast(city: string) {
    const url = `${this.API_URL}/forecast?q=${city}&appid=${this.API_KEY}`;
    return this.http.get(url);
  }
}

