import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-office',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './office.component.html',
  styleUrl: './office.component.css',
})
export class OfficeComponent {}
