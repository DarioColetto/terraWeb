import { Component, output, OnDestroy } from '@angular/core';
import {
  trigger,
  animate,
  transition,
  style,
  query,
  animateChild,
  AnimationEvent,
} from '@angular/animations';

@Component({
    selector: 'app-loader',
    imports: [],
    templateUrl: './loader.component.html',
    styleUrl: './loader.component.css',
    animations: [
        trigger('container', [
            transition(':enter', [
                query('@logo', animateChild(), { optional: true }),
                query('@text', animateChild(), { optional: true }),
                query('@slogan', animateChild(), { optional: true }),
            ]),
            transition(':leave', [
                style({
                    opacity: 1,
                    transform: 'scale(1)',
                    filter: 'none',
                }),
                animate('1s cubic-bezier(0.250, 0.460, 0.450, 0.940)', style({
                    opacity: 0,
                    transform: 'translateZ(1000px) scale(2)',
                    filter: 'blur(10px)',
                })),
            ]),
        ]),
        trigger('logo', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(20px)' }),
                animate('700ms cubic-bezier(0.25, 0.1, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
        ]),
        trigger('text', [
            transition(':enter', [
                style({
                    letterSpacing: '-0.5em',
                    filter: 'blur(12px)',
                    opacity: 0,
                }),
                animate('0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940)', style({
                    letterSpacing: '0em',
                    filter: 'blur(0px)',
                    opacity: 1,
                })),
            ]),
        ]),
        trigger('slogan', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(20px)' }),
                animate('700ms cubic-bezier(0.25, 0.1, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
            ]),
        ]),
    ]
})
export class LoaderComponent implements OnDestroy{

  animationDone = output<boolean>();

  onAnimationEvent(event: AnimationEvent) {
    
    setTimeout( ()=>{

      this.animationDone.emit(true)
    } , 500)
  }

  ngOnDestroy() {
    console.log("Bye")
  }
}
