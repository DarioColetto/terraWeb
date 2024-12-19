import { Component } from '@angular/core';



@Component({
  selector: 'app-servicio-items',
  standalone: true,
  imports: [],
  templateUrl: './servicio-items.component.html',
  styleUrl: './servicio-items.component.css'
})
export class ServicioItemsComponent {

  circle_canvas_size = 80;
  circle_radius = 25;;
  line_start = this.circle_canvas_size / 2;
  line_end = this.circle_canvas_size / 2;

  items = [ {title :'Preparación del Terreno',  descripcion: `Realización de perforaciones para la captación del calor.` } ,
    {title :'INSTALACIÓN',  descripcion: 'Colocación de la bomba de calor y depósito de agua en caso de requerir el servicio de Agua Caliente Sanitaria' } ,
    {title :'ACTIVACION',  descripcion: 'Puesta en marcha y prueba del sistema al inicio del verano y al inicio del invierno' } 
  ] 

}
