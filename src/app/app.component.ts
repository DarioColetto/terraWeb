import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-root',

    animations: [
        trigger('fade', [
            transition(':enter', [
                style({
                    opacity: 0,
                    filter: "blur(10px)"
                }),
                animate('0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000)', style({
                    opacity: 1,
                    filter: "none"
                }))
            ])
        ])
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'terraWeb';



  //Change to  'true' to skip the loader animation
  animationDone = true

  isDisable = true

  loaderAnimationDone(done:boolean){
    this.animationDone = done

  }
}
