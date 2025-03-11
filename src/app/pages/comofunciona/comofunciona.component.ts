import { Component } from '@angular/core';
import { CardInfo, cardInfo } from './descubri-data';
import { LinkBarComponent } from '../../components/link-bar/link-bar.component';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-comofunciona',
  standalone: true,
  imports: [LinkBarComponent],
  templateUrl: './comofunciona.component.html',
  styleUrl: './comofunciona.component.css',
  animations: [
    trigger('fadeInGrow', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger('50ms', [animate('500ms', style({ opacity: 1 }))]),
        ]),
      ]),
    ]),
  ],
})
export class ComofuncionaComponent {
  cardData: CardInfo = cardInfo;
  view = 0;

  renderView(index: number) {
    this.view = index;
  }
}
