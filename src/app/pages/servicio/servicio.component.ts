import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { ServicioItemsComponent } from '../../components/servicio-items/servicio-items.component';
import { ViewportObserverDirective } from '../../app-view-port-oserver.directive';
import { DotsBoxComponent } from '../../components/dots-box/dots-box.component';
import { ComofuncionaComponent } from '../../components/comofunciona/comofunciona.component';
import { DescubriComponent } from '../descubri/descubri.component';
import { LinkBarComponent } from "../../components/link-bar/link-bar.component";
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [
    SliderComponent,
    ServicioItemsComponent,
    ViewportObserverDirective,
    ComofuncionaComponent,
    DescubriComponent,
    LinkBarComponent
],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css',
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
})
export class ServicioComponent {
  
  view = 0;

  renderView(index: number) {
    this.view = index;
  }


}
