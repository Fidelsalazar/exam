import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [MatIconModule, MatGridListModule],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css',
})
export class NoticeComponent {}
