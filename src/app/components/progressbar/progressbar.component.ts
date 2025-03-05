import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { Component, NgZone, output, signal } from '@angular/core';


@Component({
  standalone:true,
    selector: 'app-progress-bar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.css'],
    animations: [
        trigger('fill', [
            state('empty', style({ width: '0%' })),
            state('full', style({ width: '100%' })),
            transition('empty => full', [animate('3s ease')]),
            transition('full => empty', [animate('0.1s ease')]),
        ]),
    ]
})
export class ProgressbarComponent {
  state = signal<'empty' | 'full'>('empty');
  intervalId: any;
  currentInterval = 200;
  isFull = output<boolean>()

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.startAlternatingInterval();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startAlternatingInterval() {
    this.ngZone.runOutsideAngular(() => {
      const toggleStateAndAdjustInterval = () => {
        this.ngZone.run(() => {
          // Toggle between 'empty' and 'full'
          this.state.set(this.state() === 'empty' ? 'full' : 'empty');
        });

        // Adjust interval to alternate
        this.currentInterval = this.currentInterval === 200 ? 4000 : 200;
        this.resetInterval(toggleStateAndAdjustInterval);
      };

      // Start the first interval
      this.intervalId = setInterval(toggleStateAndAdjustInterval, this.currentInterval);
    });
  }

  private resetInterval(callback: () => void) {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(callback, this.currentInterval);
  }

  onAnimation(event:AnimationEvent){
    if(event.toState === 'full'){
      this.isFull.emit(true)
    }
    

  }
}
