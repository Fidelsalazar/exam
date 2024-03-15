import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './module/welcome/welcome.component';
import { ExperienceComponent } from "./module/experience/experience.component";
import { NoticeComponent } from "./module/notice/notice.component";
import { InfoComponent } from "./module/info/info.component";
import { ProductsComponent } from "./module/products/products.component";
import { OfficeComponent } from "./module/office/office.component";
import { ComentariosComponent } from "./module/comentarios/comentarios.component";
import { AplicationComponent } from "./module/aplications/aplication.component";
import { ContactsComponent } from "./module/contacts/contacts.component";
import { FooterComponent } from "./module/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      WelcomeComponent,
        RouterOutlet,
        ExperienceComponent,
        NoticeComponent,
        InfoComponent,
        ProductsComponent,
        OfficeComponent,
        ComentariosComponent,
        AplicationComponent,
        ContactsComponent,
        FooterComponent
    ],
    
})
export class AppComponent {
  title = 'exam1';
  slides: any[] = [
    {
      url: '../../../assets/first-slide/58690ef8-ed75-4a63-b11d-35dc52dda6fd.png',
      title: 'Experiencias',
      description:
        'Acompáñanos en las actividades más interesantes y emotivas ofrecidas por diferentes anfitriones',
      redirect: '',
    },
    {
      url: '../../../assets/first-slide/a83decb3-48b5-492b-a2bc-fdfbc5a6b908.png',
      title: 'Trasladeate de un lugar a otro',
      description:
        'Acompáñanos en las actividades más interesantes y emotivas ofrecidas por diferentes anfitriones',
      redirect: '',
    },
    {
      url: '../../../assets/first-slide/melia-internacional.png',
      title: 'Alojamientos a tu medida',
      description:
        'Encuentra el sitio mas acogedor para pasar tus dias en la isla',
      redirect: '',
    },
    {
      url: '../../../assets/first-slide/transfer-in-cuba-thumb-7477.png',
      title: 'Estancia de lujo',
      description:
        'Disfruta de la comodidad y confort que te ofrecen muchas de nuestras instalaciones hoteleras',
      redirect: '',
    },
  ];

  productsSlides: any[] = [
    {
      url: '../../../assets/products/e3780e38-62d1-4b23-878a-d788f6a1c5c8.png',
      title: "Recorre La Habana con Chucha's Car",
      description:
        'Plaza de la Revolución, Habana Vieja, Centro Habana. La Habana.',
      price: '25,00 CUC',
      tare: 'por persona',
      rating: '4.9 (225)',
    },
    {
      url: '../../../assets/products/35eab1dc-d54c-4151-a61c-04f5129ced47.png',
      title: 'Cocina con Yusi',
      description: 'Viñales. Pinar del Río.',
      price: '15,00 CUC',
      tare: 'por persona',
      rating: '4.5 (148)',
    },
    {
      url: '../../../assets/products/dbbda57e-3e12-4c55-bcca-ab77254a6245.png',
      title: 'Descubre el susurro de las rocas',
      description: 'Viñales. Pinar del Río.',
      price: '30,00 CUC',
      tare: 'por persona',
      rating: '4.7 (200)',
    },
    {
      url: '../../../assets/products/58690ef8-ed75-4a63-b11d-35dc52dda6fdfa.png',
      title: 'Casa Particular Susana',
      description: 'Plaza de la Revolución. La Habana.',
      price: '80,00 CUC',
      tare: 'por noche, por la casa',
      rating: '4.9 (225)',
    },
  ];
  commentsSlides: any[] = [
    {
      url: '../../../assets/profile/1.jpeg',
      name: 'Luke Wills',
      date: 'Dic 16, 2020',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam auctor, laoreet ligula sit amet, faucibus tortor. Sed nec nisi nec elit efficitur porta. Integer vitae risus eget velit tincidunt consectetur. Sed non diam auctor, laoreet ligula sit amet, faucibus tortor. Sed nec nisi nec elit efficitur porta. Integer vitae risus eget velit tincidunt consectetur. Sed non diam auctor, laoreet ligula sit amet, faucibus tortor. Sed nec nisi nec elit efficitur porta. Integer vitae risus eget velit tincidunt consectetur.',
    },
    {
      url: '../../../assets/profile/2.jpeg',
      name: 'Luke Wills',
      date: 'Dic 16, 2020',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam auctor, laoreet ligula sit amet, faucibus tortor. Sed nec nisi nec elit efficitur porta. Integer vitae risus eget velit tincidunt consectetur. Sed non diam auctor, laoreet ligula sit amet, faucibus tortor. Sed nec nisi nec elit efficitur porta. Integer vitae risus eget velit tincidunt consectetur. Sed non diam auctor, laoreet ligula sit amet, faucibus tortor. Sed nec nisi nec elit efficitur porta. Integer vitae risus eget velit tincidunt consectetur.',
    },
  ];
}
