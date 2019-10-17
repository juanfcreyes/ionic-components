import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit, OnDestroy {
  
  ocultar = '';
  
  slides: { img: string, title: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      title: 'Comparte Fotos',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      title: 'Escucha Música',
      desc: 'Toda tu música favorita está aquí'
    },
    {
      img: '/assets/slides/calendar.svg',
      title: 'Nunca olvides nada',
      desc: 'El mejor calendario del mundo a tu disposición'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      title: 'Tu ubicación',
      desc: 'Siempre sabremos donde estás!'
    }
  ];

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  ngOnDestroy() {}


  onClick() {
    this.ocultar = 'animated fadeOut fast';
    this.navController.navigateBack('/');
  }

}
