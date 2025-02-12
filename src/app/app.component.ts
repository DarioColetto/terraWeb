import { Component, HostBinding } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackgroundComponent } from './components/background/background.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { DescubriComponent } from './pages/descubri/descubri.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoaderComponent,
    NavbarComponent,
    ServicioComponent,
    DescubriComponent,
    BackgroundComponent,
    BannerComponent,
    ContactComponent
],

  animations:[
    trigger('fade',[
      transition(':enter',[

        style({
          opacity:0,
          filter: "blur(10px)"
        }),
        animate('1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)', 
          style( 
            {
              opacity:1,
              filter: "none"
            }))
        
      ])
      ])
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'terraWeb';




  animationDone = !false

  isDisable = true

  loaderAnimationDone(done:boolean){
    this.animationDone = done

  }
}
