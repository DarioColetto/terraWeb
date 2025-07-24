import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  standalone:true,
    host: {
    '[style.--icon-color]': 'colorFill()'
  }
})
export class SocialComponent {

  
  colorFill = input<string>('white');

  
}
