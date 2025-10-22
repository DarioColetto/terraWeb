import { Component } from '@angular/core';
import { CardInfo, cardInfo } from './comofunciona-data';



@Component({
  selector: 'app-comofunciona',
  standalone: true,
  imports: [],
  templateUrl: './comofunciona.component.html',
  styleUrl: './comofunciona.component.css',
 
})
export class ComofuncionaComponent {
  cardData: CardInfo = cardInfo;

}
