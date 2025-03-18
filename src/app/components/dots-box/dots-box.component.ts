import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, input, output } from '@angular/core';

@Component({
   standalone:true,
    selector: 'app-dots-box',
    templateUrl: './dots-box.component.html',
    styleUrl: './dots-box.component.css',
    animations: [
        trigger('dotAnimation', [
            state('default', style({ backgroundColor: 'var(--deep-green)' })),
            state('selected', style({ backgroundColor: 'var(--gold)' })),
            transition('* <=> selected', animate('0.6s ease-out'))
        ])
    ]
})
export class DotsBoxComponent {

  dotsNumber = input<number>(0)
  indexSelected = output<number>()
  dots!: any[];
  prevIndex = 0
  intervalId: any;
  index = 0

  ngOnInit(){
    this.dots = this.generateDots()
    this.dots[0] = 'selected'
    this.startAutoChange();
  }

  private generateDots(){
    return Array(this.dotsNumber()).fill('default')
  }


  getDotIndex(index:number){
    this.indexSelected.emit(index)
    this.index = index
    this.reloadInterval();
  }

  changeState(index:number){

    this.dots[index] = 'selected'
    this.dots[this.prevIndex] = 'default'
    this.prevIndex = index
    
  }
  
  startAutoChange() {
    this.intervalId = setInterval(() => {
      this.changeIndexAuto();
    }, 3000);
  }

  changeIndexAuto() {
    this.index = (this.index + 1) % this.dots.length;
    this.changeState(this.index)
    this.indexSelected.emit(this.index)
    
  }
  reloadInterval() {
    clearInterval(this.intervalId);
    this.startAutoChange();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
