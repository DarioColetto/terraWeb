import { Component } from '@angular/core';
import { SocialComponent } from "../../components/social/social.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
