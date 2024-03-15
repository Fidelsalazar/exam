import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { InterfaceDATA } from '../core/interface/response.interface';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  private API_KEY = '7aa0f133ff98c5c3bed6ce191d7f90c9' 

  constructor(private http: HttpClient) {}

  getWeatherData(data: InterfaceDATA){
    let url=`${this.API_URL}?lat=${data.lat}&lon=${data.long}&appid=${this.API_KEY}`;
    console.log(url);
    return this.http.get(url);
  }
}

