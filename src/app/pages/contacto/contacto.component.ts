import { Component } from '@angular/core';
import { CotanctCardComponent } from '../../components/cotanct-card/cotanct-card.component';
import { SocialComponent } from '../../components/social/social.component';

@Component({
  selector: 'app-contacto',
  imports: [CotanctCardComponent, SocialComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
