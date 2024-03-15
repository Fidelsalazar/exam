import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//Material Impots
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css',
})
export class ComentariosComponent {
  name: string | undefined;

  //textareaContent=''

  formulario: FormGroup ;

  isMenuOpen = true;
  currentSlide = 0;

  @Input() slides: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: [''],
    });
  }

  onSubmit() {}

  ngOnInit(): void {
    console.log('Coments', this.slides);
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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onMenuOpened() {
    this.isMenuOpen = false;
    console.log('close');
  }
  onMenuClosed() {
    this.isMenuOpen = false;
    console.log('close');
  }

  clearTextarea() {
    //this.textareaContent = '';
  }
}
