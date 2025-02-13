import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialComponent } from "../social/social.component";
import { CotanctCardComponent } from "../cotanct-card/cotanct-card.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, SocialComponent, CotanctCardComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  
  // opened:boolean = true
  

  // open() {
  //   this.opened = !this.opened
  // }


}
