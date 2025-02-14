import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { ServicioItemsComponent } from '../../components/servicio-items/servicio-items.component';
import { ViewportObserverDirective } from '../../app-view-port-oserver.directive';
import { DotsBoxComponent } from '../../components/dots-box/dots-box.component';
import { ComofuncionaComponent } from '../../components/comofunciona/comofunciona.component';
import { DescubriComponent } from '../descubri/descubri.component';
import { NgClass } from '@angular/common';
import { title } from 'process';
import { LinkBarComponent } from "../../components/link-bar/link-bar.component";

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [
    SliderComponent,
    ServicioItemsComponent,
    ViewportObserverDirective,
    ComofuncionaComponent,
    DescubriComponent,
    NgClass,
    LinkBarComponent
],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css',
})
export class ServicioComponent {
  
  view = 0;

  renderView(index: number) {
    this.view = index;
  }


}
