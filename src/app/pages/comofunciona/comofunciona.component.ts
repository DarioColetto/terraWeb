import { Component } from '@angular/core';
import { CardInfo, cardInfo } from './comofunciona-data';
import { LinkBarComponent } from '../../components/link-bar/link-bar.component';
import { fade, triggerAnimations } from '../../animations';

@Component({
  selector: 'app-comofunciona',
  standalone: true,
  imports: [LinkBarComponent],
  templateUrl: './comofunciona.component.html',
  styleUrl: './comofunciona.component.css',
  animations: [ triggerAnimations, fade],
})
export class ComofuncionaComponent {
  cardData: CardInfo = cardInfo;
  view = 0;

  videoLinks = ['/videos/video1.mp4','/videos/video2.mp4', '/videos/video3.mp4']

  renderView(index: number) {
    this.view = index;
  }
}
