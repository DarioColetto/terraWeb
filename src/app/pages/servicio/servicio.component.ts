import { Component } from '@angular/core';
import { SliderComponent } from "../../components/slider/slider.component";
import { ServicioItemsComponent } from "../../components/servicio-items/servicio-items.component";

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [SliderComponent, ServicioItemsComponent],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent {

}
