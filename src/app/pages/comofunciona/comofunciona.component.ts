import { Component } from '@angular/core';
import { CardInfo, cardInfo } from './descubri-data';
import { DotsBoxComponent } from "../../components/dots-box/dots-box.component";
import { LinkBarComponent } from '../../components/link-bar/link-bar.component';

@Component({
    selector: 'app-comofunciona',
    standalone:true,
    imports: [DotsBoxComponent, LinkBarComponent],
    templateUrl: './comofunciona.component.html',
    styleUrl: './comofunciona.component.css'
})
export class ComofuncionaComponent {

  cardData:CardInfo = cardInfo 
  view = 0;

  renderView(index: number) {
    this.view = index;
  }
}
