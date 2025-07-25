import { Component,  signal} from '@angular/core';
import {
  animate,
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
  }


@Component({
  standalone:true,
  imports:[ProgressbarComponent, IconComponent],
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    animations: [
        trigger('slideAnimation', [
            // Estado por defecto
            //state('default', style({ transform: 'translateX(0)' })),
            // Transición hacia la izquierda
            transition('void => toLeft', [
                style({
                    transform: 'translateX(-100%)',
                    filter: 'blur(40px)',
                    opacity: 0,
                }),
                animate('1s 0.2s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({
                    transform: 'translateX(0)',
                    filter: 'none',
                    opacity: 1,
                })),
            ]),
            // Transición hacia la derecha
            transition('void => toRight', [
                style({
                    transform: 'translateX(100%)', // Confirmar que el punto inicial es 100%
                    filter: 'blur(40px)',
                    opacity: 0,
                }),
                animate('1s 0.2s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({
                    transform: 'translateX(0)',
                    filter: 'none',
                    opacity: 1,
                })),
            ]),
            // Salida hacia la izquierda
            transition('toLeft => void', [
                animate('1s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({
                    transform: 'translateX(-100%)',
                    filter: 'blur(40px)',
                    opacity: 0,
                })),
            ]),
            // Salida hacia la derecha
            transition('toRight => void', [
                animate('1s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({
                    transform: 'translateX(100%)', // Confirmar que se mueve hacia la derecha
                    filter: 'blur(40px)',
                    opacity: 0,
                })),
            ]),
        ]),
    ]
})
export class SliderComponent {

  
  index = signal<number>(0)
  slideIndex = 0;
  fullBar:any;
  direction: 'toLeft' | 'toRight'  = 'toRight';
  auxActive:boolean = false;
 
 

  SLIDES = [
    {
      title: ['calefaccion'],
      body: ['Mediante Losa Radiante', 'Ambientes unificados o diferenciados','Temperatura máxima recomendada en calor radiante: 21°C'],
      img:'/garden-800.jpg'
    },
    {
      title: ['REFRESCAMIENTO'],
      body: ['Mediante Losa Radiante y/o Fan Coils','Ambientes unificados o diferenciados','Temperatura mínima recomendada en Frio aereo: 24°C'],
      img:'/garden-800.jpg'
    },
    {
      title: ['AGUA CALIENTE SANITARIA'],
      body: ['Mediante Tanque Acumulador Termico', 'Agua caliente a 40°C, extensible hasta 70°C', 'Sistema secundario ante emergencias'],
      img:'/garden-800.jpg'
    },
  ];

   slide = signal<Slide>(this.SLIDES[0]);

  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.SLIDES.length;
    this.direction = 'toRight'
    this.slide.set(this.SLIDES[this.slideIndex]);
    this.auxActive = !this.auxActive;
  }

  prevSlide() {
    this.slideIndex =
      (this.slideIndex - 1 + this.SLIDES.length) % this.SLIDES.length;
      this.direction = 'toLeft'
      this.slide.set(this.SLIDES[this.slideIndex]);
      this.auxActive = !this.auxActive;
  }

  isBarFull(event:boolean){
    this.nextSlide()
    
  }


}
