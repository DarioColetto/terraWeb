import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icons.component';
import { NgClass } from '@angular/common';
import { cardInfo, CardInfo, data, Info } from './descubri-data';



@Component({
  selector: 'app-descubri',
  standalone: true,
  imports: [IconComponent, NgClass],
  templateUrl: './descubri.component.html',
  styleUrl: './descubri.component.css',
})
export class DescubriComponent {
  
  data:Info = data;
  cardData:CardInfo = cardInfo 
  slideIndex = 0
  dotIndex = 0

  cardIndex = 0
  cardDotIndex = 0

  changeIndex(index:number){
    this.dotIndex = index
  }

  changeIndexCard(index:number){
    this.cardDotIndex = index
  }
}
