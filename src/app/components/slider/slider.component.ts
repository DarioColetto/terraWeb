import { Component,  signal} from '@angular/core';
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




@Component({
  standalone:true,
  imports:[ProgressbarComponent, IconComponent],
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    animations: [
        trigger('slideAnimation', [
            // Estado por defecto
            state('default', style({ transform: 'translateX(0)' })),
            // Transición hacia la izquierda
            transition('void => toLeft', [
                style({
                    transform: 'translateX(-100%)',
                    filter: 'blur(40px)',
                    opacity: 0,
                }),
                animate('0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({
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
                animate('0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({
                    transform: 'translateX(0)',
                    filter: 'none',
                    opacity: 1,
                })),
            ]),
            // Salida hacia la izquierda
            transition('toLeft => void', [
                animate('0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({
                    transform: 'translateX(-100%)',
                    filter: 'blur(40px)',
                    opacity: 0,
                })),
            ]),
            // Salida hacia la derecha
            transition('toRight => void', [
                animate('0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)', style({
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
  direction: 'toLeft' | 'toRight' | 'default' = 'default';
  

  SLIDES = [
    {
      title: ['calefaccion', 'refrigeramiento'],
      body: `Además de la climatización, nuestros sistemas geotérmicos pueden integrarse
      para proporcionar agua caliente sanitaria de manera eficiente y ecológica,
      utilizando la misma tecnología de bombas de calor.`,
      img:'/garden-800.jpg'
    },
    {
      title: ['agua caliente sanitaria', 'piscina'],
      body: `Ofrecemos soluciones para la climatización de piscinas, manteniendo la
    temperatura del agua en niveles óptimos durante todo el año, utilizando
    energía geotérmica para un ahorro energético significativo.`,
      img:'/garden-800.jpg'
    },
    {
      title: ['Slider'],
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur atque
    illum accusantium eius perferendis. Laboriosam adipisci ipsum itaque
    corrupti delectus incidunt accusamus aperiam quam dolor praesentium.
    Accusantium maxime earum odit!`,
      img:'/garden-800.jpg'
    },
  ];

  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.SLIDES.length;
    this.direction = 'toRight'
  }

  prevSlide() {
    this.slideIndex =
      (this.slideIndex - 1 + this.SLIDES.length) % this.SLIDES.length;
      this.direction = 'toLeft'
  }

  isBarFull(){
    this.nextSlide()
  }

  animationDirectionHandler(event:AnimationEvent){
    console.log(event.toState)
  }

}
