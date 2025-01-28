// import { Component, NgZone, output } from '@angular/core';

// @Component({
//   selector: 'app-progress-bar',
//   standalone: true,
//   imports: [],
//   templateUrl: './progressbar.component.html',
//   styleUrls: ['./progressbar.component.css'],
// })
// export class ProgressbarComponent  {
// width = 0;
//   private intervalId: any;
//   private timeoutId: any;
//   isFull = output<boolean>()
// state: any;

//   constructor(private ngZone: NgZone) {}

//   ngOnInit(): void {
//       this.intervalId = this.interval()
//   }



//   interval(){
//     this.ngZone.runOutsideAngular(() => {
//       this.intervalId = setInterval(() => {
//         this.ngZone.run(() => 
//           console.log("Done")
//         );
//       }, 3000); // Progress updates every 50ms
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
