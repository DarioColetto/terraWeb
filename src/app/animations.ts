import {
  animate,
  animateChild,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const triggerAnimations = trigger('triggerAnimations', [
    transition(':enter', [
      // Asegura que todos los elementos con @fade comiencen ocultos
      query('@fade', [
        style({ opacity: 0, filter: 'blur(10px)', transform: 'translateX(-20px)' })
      ], { optional: true }),
  
      // Aplica la animación en secuencia con stagger
      query('@fade', 
        stagger(300, [
          animate(
            '1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
            style({ opacity: 1, filter: 'none', transform: 'translateX(0px)' })
          )
        ]), 
        { optional: true }
      )
    ])
  ]);
  
  export const fade = trigger('fade', [
    transition(':enter', [
      style({
        opacity: 0,
        filter: 'blur(10px)',
        transform: 'translateX(-20px)'
      }),
      animate(
        '1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
        style({
          opacity: 1,
          filter: 'none',
          transform: 'translateX(0px)'
        })
      ),
    ]),
  ]);
