import {
  animate,
  animateChild,
  AnimationEvent,
  group,
  query,
  sequence,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicio-items',
  standalone: true,
  imports: [],
  templateUrl: './servicio-items.component.html',
  styleUrl: './servicio-items.component.css',
  animations: [
    trigger('container', [
      transition(':enter', [
        query(
          '.row',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger('200ms', [
              animate(
                '200ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
              query('@*', animateChild(), { optional: true }), // Ejecuta las animaciones de los hijos en orden
            ]),
          ],
          { optional: true }
        ),
        query('.line-container', animateChild(), { optional: true }),
      ]),
    ]),

    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
    ]),

    trigger('leftInH', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),

    trigger('leftInP', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),

    trigger('rowAnimation', [
      transition(':enter', [
        // Primero el SVG
        sequence([
          // Se asegura de que h4 termine antes de animar p
          query('svg', animateChild()),
          query('h4', animateChild()),
          query('p', animateChild()),
        ]),
      ]),
    ]),
  ],
})
export class ServicioItemsComponent {
  circle_canvas_size = 50;
  circle_radius = this.circle_canvas_size / 2;
  line_start = this.circle_canvas_size / 2;
  line_end = this.circle_canvas_size / 2;

  items = [
    {
      title: 'CALEFACCION',
      descripcion: `Mediante Losa Radiante
Ambientes unificados o diferenciados
Temperatura máxima recomendada en calor radiante: 21°C `,
    },
    {
      title: 'REFRESCAMIENTO',
      descripcion: `Mediante Losa Radiante y/o Fan Coils
Ambientes unificados o diferenciados
Temperatura mínima recomendada en Frio aereo: 24°C`,
    },
    {
      title: 'AGUA CALIENTE SANITARIA',
      descripcion: `Mediante Tanque Acumulador Termico
Agua caliente a 40°C, extensible hasta 70°C.
Sistema secundario ante emergencias`,
    },
  ];

  animationControl(event: AnimationEvent) {
    console.log(event.triggerName);
  }
}
