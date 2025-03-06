import { Component } from '@angular/core';
import { SocialComponent } from '../social/social.component';
import { CotanctCardComponent } from '../cotanct-card/cotanct-card.component';

@Component({
    standalone:true,
    imports:[SocialComponent, CotanctCardComponent],
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  
  // opened:boolean = true
  

  // open() {
  //   this.opened = !this.opened
  // }


}
