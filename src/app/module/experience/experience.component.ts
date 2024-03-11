import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  imports: [MatCardModule, MatButtonModule, CommonModule, MatIconModule],
})
export class ExperienceComponent {
  @Input() slides: any[] = [];

  currentSlide = 0;

  showSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    console.log(this.currentSlide);
  }

  previous() {
    this.currentSlide = (this.currentSlide - 1) % this.slides.length;
  }
}


