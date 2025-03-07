import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { LinkBarComponent } from '../../components/link-bar/link-bar.component';
import { ServicioItemsComponent } from '../../components/servicio-items/servicio-items.component';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
    selector: 'app-servicio',
    templateUrl: './servicio.component.html',
    styleUrl: './servicio.component.css',
    standalone:true,
    imports:[LinkBarComponent, ServicioItemsComponent, SliderComponent],
    animations: [
        trigger('fade', [
            transition(':enter', [
                style({
                    opacity: 0,
                    filter: "blur(10px)"
                }),
                animate('1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)', style({
                    opacity: 1,
                    filter: "none"
                }))
            ])
        ])
    ]
})
export class ServicioComponent {
  
  view = 0;

  renderView(index: number) {
    this.view = index;
  }


}
