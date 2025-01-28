// import { AnimationEvent } from '@angular/animations';
// import { Component, NgZone, OnInit, OnDestroy, output } from '@angular/core';

// @Component({
//   selector: 'app-progress-bar',
//   standalone: true,
//   imports: [],
//   templateUrl: './progressbar.component.html',
//   styleUrls: ['./progressbar.component.css']
// })
// export class ProgressbarComponent implements OnInit, OnDestroy {
// onAnimationEvent($event: AnimationEvent) {
// throw new Error('Method not implemented.');
// }
//   width = 0;
//   private intervalId: any;
//   private timeoutId: any;
//   isFull = output<boolean>()
// state: any;

//   constructor(private ngZone: NgZone) {}

//   ngOnInit(): void {
//         this.timeoutId = this.timeOut()
//   }

//   intervalHandler(){
//     if (this.width == 0){
//       this.timeOut()
//     }
//   }


//   add(): void {
//     this.width++;
//     if (this.width >= 100) {
//       clearInterval(this.intervalId)
//       clearTimeout(this.timeoutId)
//       this.width = 0;
//       this.timeoutId = this.timeOut()
//       this.isFull.emit(true)
//     }
//   }

//   timeOut(){
//     return setTimeout( ()=> {
//       this.interval()
//     } , 200 )
//   }

//   interval(){
//     this.ngZone.runOutsideAngular(() => {
//       this.intervalId = setInterval(() => {
//         this.ngZone.run(() => this.add());
//       }, 50); // Progress updates every 50ms
//     })
//   }


//   ngOnDestroy(): void {
//     if (this.intervalId) {
//       clearInterval(this.intervalId); // Clear the interval to prevent memory leaks
//     }
//     if (this.timeoutId) {
//       clearTimeout(this.timeoutId); // Clear the timeout to prevent issues
//     }
//   }
// }
