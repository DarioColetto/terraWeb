import { Component } from '@angular/core';
import { CardInfo, cardInfo } from './descubri-data';
import { DotsBoxComponent } from "../dots-box/dots-box.component";

@Component({
    selector: 'app-comofunciona',
    standalone:true,
    imports: [DotsBoxComponent],
    templateUrl: './comofunciona.component.html',
    styleUrl: './comofunciona.component.css'
})
export class ComofuncionaComponent {

  cardData:CardInfo = cardInfo 
  indexSelected2 = 0
  cardDotIndex = 0

  changeIndex2(value:number){
    this.indexSelected2 = value
  }
  
  changeIndexCard(index:number){
    this.cardDotIndex = index
  }
}
