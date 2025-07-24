import { Component } from '@angular/core';

import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { fade, triggerAnimations } from '../../animations';
import { IconComponent } from "../../components/icon/icons.component";



@Component({
    selector: 'app-descubri',
    standalone:true,
    imports: [IconComponent],
    templateUrl: './descubri.component.html',
    styleUrl: './descubri.component.css',
    animations:[

      triggerAnimations, fade,

      trigger('animate', [
        transition(':enter',[
          query('@*', animateChild(), { optional: true })
        ])
      ]),

            trigger('fadeIn', [
              transition(':enter', [
                style({ opacity: 0, transform:'scale(1)' }),
                animate('500ms ease-in', style({ opacity: 1, transform:'scale(1.01)' }))
              ])
            ]),
    ]
})
export class DescubriComponent {
  
 
  indexSelected = 0
  onAnimation = 'fadeIn'

  changeIndex(index:number){
    this.indexSelected = index
    this.onAnimation = 'animate'
  }



}
