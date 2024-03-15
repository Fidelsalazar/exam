import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-aplication',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './aplication.component.html',
  styleUrl: './aplication.component.css',
})
export class AplicationComponent {
  numCards = 6; // Cantidad de tarjetas que deseas mostrar
  cardsArray = [1,2,3];
}
