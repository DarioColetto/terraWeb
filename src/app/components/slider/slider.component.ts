import { Component, signal } from '@angular/core';
import {
  animate,
  AnimationEvent,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ProgressbarComponent } from '../progressbar/progressbar.component';
import { IconComponent } from '../icon/icons.component';


interface Slide {
  title: string[];
  body: string[];
  img: string;
  alt: string;
}

@Component({
  standalone: true,
  imports: [ProgressbarComponent, IconComponent],
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('slideAnimation', [
      // Estado por defecto
      state(
        'default',
        style({
          transform: 'translateX(0)',
          filter: 'none',
          opacity: 1,
          zIndex: 1,
        })
      ),

      // Transición bidireccional sin cambios
      transition('* <=> default', animate('0s')),

      // Transición hacia la izquierda
      transition('* => toLeft', [
        style({
          transform: 'translateX(100%)',
          filter: 'blur(40px)',
          opacity: 0,
          zIndex: 2,
        }),
        animate(
          '1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000)',
          style({
            transform: 'translateX(0)',
            filter: 'none',
            opacity: 1,
            zIndex: 1,
          })
        ),
      ]),

      // Transición hacia la derecha
      transition('* => toRight', [
        style({
          transform: 'translateX(-100%)',
          filter: 'blur(40px)',
          opacity: 0,
          zIndex: 2,
        }),
        animate(
          '1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000)',
          style({
            transform: 'translateX(0)',
            filter: 'none',
            opacity: 1,
            zIndex: 1,
          })
        ),
      ]),

      // Salida hacia izquierda (cuando cambia a otro estado)
      transition('toLeft => void', [
        animate(
          '1.5s 0.2s cubic-bezier(0.230, 1.000, 0.320, 1.000)',
          style({
            transform: 'translateX(-100%)',
            filter: 'blur(40px)',
            opacity: 0,
            zIndex: 0,
          })
        ),
      ]),

      // Salida hacia derecha (cuando cambia a otro estado)
      transition('toRight => void', [
        animate(
          '1.5s 0.2s cubic-bezier(0.230, 1.000, 0.320, 1.000)',
          style({
            transform: 'translateX(100%)',
            filter: 'blur(40px)',
            opacity: 0,
            zIndex: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class SliderComponent {
  index = 0;
  indexA = 0;
  indexB = 0;
  fullBar: any;
  direction: 'toLeft' | 'toRight' | 'default' = 'default';
  auxActive: boolean = false;

  SLIDES = [
    {
      title: ['calefaccion'],
      body: [
        'Mediante Losa Radiante',
        'Ambientes unificados o diferenciados',
        'Temperatura máxima recomendada en calor radiante: 21°C',
      ],
      img: '/paisajes/imagen1.jpg',
      alt: 'Primer Slide: Imagen de calefacción',
    },
    {
      title: ['REFRESCAMIENTO'],
      body: [
        'Mediante Losa Radiante y/o Fan Coils',
        'Ambientes unificados o diferenciados',
        'Temperatura mínima recomendada en Frio aereo: 24°C',
      ],
      img: '/paisajes/imagen2.jpg',
      alt: 'Imagen de refrescamiento',
    },
    {
      title: ['AGUA CALIENTE SANITARIA'],
      body: [
        'Mediante Tanque Acumulador Termico',
        'Agua caliente a 40°C, extensible hasta 70°C',
        'Sistema secundario ante emergencias',
      ],
      img: '/paisajes/imagen3.jpg',
      alt: 'Tercer Slide: Imagen de agua caliente sanitaria',
    },
  ];

  nextSlide() {
    //Primero suma el index
    this.index = (this.index + 1) % this.SLIDES.length;

    
    if (this.auxActive) {
      this.indexA = this.index;
    } else {
      this.indexB = this.index;
    }

    this.direction = 'toRight';
    this.auxActive = !this.auxActive;

    // Actualiza el indexA para que coincida con el index actual
    if (this.auxActive) {
      this.indexA = this.index;
    } else {
      this.indexB = this.index;
    }
  }

  prevSlide() {
    
    
    this.index = (this.index - 1 + this.SLIDES.length) % this.SLIDES.length;
    
        if (this.auxActive) {
      this.indexA = this.index;
    } else {
      this.indexB = this.index;
    }
    this.direction = 'toLeft';
    this.auxActive = !this.auxActive;

        if (this.auxActive) {
      this.indexA = this.index;
    } else {
      this.indexB = this.index;
    }
  }

  isBarFull(event: boolean) {
    this.nextSlide();
  }

  onAnimationDone(event: AnimationEvent) {
    if (event.toState === 'toLeft' || event.toState === 'toRight') {
      this.direction = 'default';
    }
  }
}
