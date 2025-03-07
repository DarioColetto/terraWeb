import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icons.component';
import { cardInfo, CardInfo, data, Info } from './descubri-data';
import { DotsBoxComponent } from "../../components/dots-box/dots-box.component";
import { ComofuncionaComponent } from "../../components/comofunciona/comofunciona.component";



@Component({
    selector: 'app-descubri',
    standalone:true,
    imports: [IconComponent, DotsBoxComponent, ComofuncionaComponent, DescubriComponent],
    templateUrl: './descubri.component.html',
    styleUrl: './descubri.component.css'
})
export class DescubriComponent {
  
  data:Info = data;
  cardData:CardInfo = cardInfo 

  images = [
    '/paisajes/imagen1.jpg', 
    '/paisajes/imagen2.jpg',  
    '/paisajes/imagen3.jpg',
    '/paisajes/imagen4.jpg',
    '/paisajes/imagen5.jpg',
   ]

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
