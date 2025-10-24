import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IconRegistryService } from '../../components/icon/IconRegistryService.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-descubri',
  standalone: true,
  imports: [AngularSvgIconModule], 
  templateUrl: './descubri.component.html',
  styleUrl: './descubri.component.css',
})
export class DescubriComponent {

  constructor( private _icons: IconRegistryService) { 
   
  }
}
