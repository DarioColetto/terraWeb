import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { BackgroundComponent } from './components/background/background.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { DescubriComponent } from './pages/descubri/descubri.component';
import { ComofuncionaComponent } from './pages/comofunciona/comofunciona.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from "./pages/home/home.component";
import { SocialComponent } from './components/social/social.component';
import { VerticalSeparatorComponent } from './components/vertical-separator/vertical-separator.component';
import { ViewportObserverDirective } from './app-view-port-oserver.directive';

@Component({
  selector: 'app-root',
  imports: [
    BackgroundComponent,
    NavbarComponent,
    ServicioComponent,
    DescubriComponent,
    ComofuncionaComponent,
    ContactoComponent,
    HomeComponent,
    SocialComponent,
    VerticalSeparatorComponent,
    ViewportObserverDirective
],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
          filter: 'blur(10px)',
        }),
        animate(
          '0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000)',
          style({
            opacity: 1,
            filter: 'none',
          })
        ),
      ]),
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'terraWeb';

  //Change to  'true' to skip the loader animation
  animationDone = true;

  isDisable = true;

  hideSocial: boolean = false;

  loaderAnimationDone(done: boolean) {
    this.animationDone = done;
  }

  onScroll(event: Event) {
    console.log(event);
  }

  onTitleVisible(title: string) {
    console.log(`Title is visible: ${title}`);
    
    // You can add additional logic here if needed
  }

  onHideSocial(title: string){
    console.log(`Title is visible: ${title}`);
      if(title ==='conta'){
        this.hideSocial = true;
      }else{
        this.hideSocial = false;
      }
  }
}
