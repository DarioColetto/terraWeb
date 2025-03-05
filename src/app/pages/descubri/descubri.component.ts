import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icons.component';
import { cardInfo, CardInfo, data, Info } from './descubri-data';
import { DotsBoxComponent } from "../../components/dots-box/dots-box.component";



@Component({
    selector: 'app-descubri',
    standalone:true,
    imports: [IconComponent, DotsBoxComponent],
    templateUrl: './descubri.component.html',
    styleUrl: './descubri.component.css'
})
export class DescubriComponent {
  
  data:Info = data;
  cardData:CardInfo = cardInfo 

  dotIndex = 0
  cardDotIndex = 0

  indexSelected1 = 0



  changeIndex(index:number){
    this.dotIndex = index
  }

  changeIndex1(value:number){
    this.indexSelected1= value
  }


}
