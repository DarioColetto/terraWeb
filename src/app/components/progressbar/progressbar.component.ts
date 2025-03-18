import { animate, AnimationEvent, style, transition, trigger } from '@angular/animations';
import { Component, output, signal } from '@angular/core';


@Component({
  standalone:true,
    selector: 'app-progress-bar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.css'],
    animations: [
      trigger('fill', [
        transition(':enter', [
          style({ width: '0%' }), // Define el estado inicial
          animate('3s ease', style({ width: '100%' })) // Define la animación
        ])
      ])
    ]
})
export class ProgressbarComponent {
  isFull = output<boolean>(); 
  show = signal(true); 

  onAnimation() {
    this.show.set(false); 
    setTimeout(() => {
      this.isFull.emit(true); 
      this.show.set(true)
    }, 500);
  }
}