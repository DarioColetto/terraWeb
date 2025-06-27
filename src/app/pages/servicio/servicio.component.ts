import { Component } from '@angular/core';
import { ServicioItemsComponent } from '../../components/servicio-items/servicio-items.component';
import { fade, triggerAnimations } from '../../animations';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
    selector: 'app-servicio',
    templateUrl: './servicio.component.html',
    styleUrl: './servicio.component.css',
    standalone:true,
    imports:[ServicioItemsComponent, SliderComponent],
    animations: [triggerAnimations,fade]
})
export class ServicioComponent {
  
  view = 0;

  renderView(index: number) {
    this.view = index;
  }


}
