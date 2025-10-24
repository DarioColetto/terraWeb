import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icons.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IconRegistryService } from '../../components/icon/IconRegistryService.service';

@Component({
  selector: 'app-descubri',
  standalone: true,
  imports: [IconComponent, AngularSvgIconModule], 
  templateUrl: './descubri.component.html',
  styleUrl: './descubri.component.css',
})
export class DescubriComponent {

  constructor( private _icons: IconRegistryService) { 
   
  }
}
