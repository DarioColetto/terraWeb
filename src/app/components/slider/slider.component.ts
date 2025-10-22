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
import { NgClass } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

interface Slide {
  title: string[];
  body: string[];
  img: string;
  alt: string;
}

@Component({
  standalone: true,
  imports: [ProgressbarComponent, IconComponent, NgClass ,NgOptimizedImage],
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  index = 0;

  fullBar: any;
  animationState = signal<'toLeft' | 'toRight' | 'default'>('default');
  blurAnimation = signal<'blur' | 'default'>('default');
  animationDone: boolean = true;

  

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

  nextSlide = () => {
    this.SLIDES.push(this.SLIDES.shift()!);
    this.animationState.set('toRight');
    this.index = (this.index + 1) % this.SLIDES.length;
  };

  prevSlide = () => {
    this.SLIDES.unshift(this.SLIDES.pop()!);
    this.animationState.set('toLeft');
    this.index = (this.index - 1 + this.SLIDES.length) % this.SLIDES.length;
  };

  onClickHandler(fn: () => void): void {
    if (!this.animationDone) return;
    this.animationDone = false;
    this.blurAnimation.set('blur');
    fn();

    setTimeout(() => {
      this.animationDone = true;
      this.blurAnimation.set('default');
      this.animationState.set('default');
    }, 1000);
  }

  isBarFull(event: boolean) {
    this.nextSlide();
  }
}
