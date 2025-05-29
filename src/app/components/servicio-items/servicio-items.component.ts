import { animate, animateChild, AnimationEvent, group, query, sequence, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';



@Component({
    selector: 'app-servicio-items',
    standalone:true,
    imports: [],
    templateUrl: './servicio-items.component.html',
    styleUrl: './servicio-items.component.css',
    animations: [
      trigger('container', [
        transition(':enter', [
          query('.row', [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger('200ms', [
              animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
              query('@*', animateChild(), { optional: true })  // Ejecuta las animaciones de los hijos en orden
            ])
          ], { optional: true }),
          query('.line-container', animateChild(), { optional: true }) 
        ])
      ]),
    
      trigger('fadeIn', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('300ms ease-in', style({ opacity: 1 }))
        ])
      ]),
    
      trigger('leftInH', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          animate('200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
      ]),
      
      trigger('leftInP', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
      ]),
    
      trigger('rowAnimation', [
        transition(':enter', [
          // Primero el SVG
          sequence([ // Se asegura de que h4 termine antes de animar p
            query('svg', animateChild()), 
            query('h4', animateChild()),
            query('p', animateChild())
          ])
        ])
      ])

    ]
      
    
    
})
export class ServicioItemsComponent {

  circle_canvas_size = 50;
  circle_radius = this.circle_canvas_size/2;
  line_start = this.circle_canvas_size / 2;
  line_end = this.circle_canvas_size / 2;

  items = [ {title :'Preparación del Terreno',  descripcion: `Realización de perforaciones para la captación del calor.` } ,
    {title :'INSTALACIÓN',  descripcion: 'Colocación de la bomba de calor y depósito de agua en caso de requerir el servicio de Agua Caliente Sanitaria' } ,
    {title :'ACTIVACION',  descripcion: 'Puesta en marcha y prueba del sistema al inicio del verano y al inicio del invierno' } 
  ] 



  animationControl(event:AnimationEvent){
    console.log(event.triggerName)
  }
}
