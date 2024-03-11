import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from "../experience/experience.component";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [MatCardModule, MatButtonModule, CommonModule, MatIconModule, ExperienceComponent]
})
export class ProductsComponent {
  @Input() slides: any[] = [];

  currentSlide = 0;

  ngOnInit():void{
    console.log(this.slides)
  }
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
