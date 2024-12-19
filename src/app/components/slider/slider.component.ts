import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  slides = [1,2, 3 ]
  counter = 2

  nextSlide(){
    this.counter += 1
  }

  prevSlide(){
    this.counter -= 1
  }


}

