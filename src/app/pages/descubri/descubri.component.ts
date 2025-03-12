import { Component } from '@angular/core';
import { data, Info } from './descubri-data';
import { DotsBoxComponent } from "../../components/dots-box/dots-box.component";
import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';



@Component({
    selector: 'app-descubri',
    standalone:true,
    imports: [DotsBoxComponent],
    templateUrl: './descubri.component.html',
    styleUrl: './descubri.component.css',
    animations:[

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
  
  data:Info = data;

  images = [
    '/paisajes/imagen1.jpg', 
    '/paisajes/imagen2.jpg',  
    '/paisajes/imagen3.jpg',
    '/paisajes/imagen4.jpg',
    '/paisajes/imagen5.jpg',
   ]


  indexSelected = 0
  onAnimation = 'fadeIn'

  changeIndex(value:number){
    this.indexSelected= value

    this.onAnimation = 'animate'
  }


}
