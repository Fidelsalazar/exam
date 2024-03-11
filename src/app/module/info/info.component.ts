import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
})
export class InfoComponent {}
