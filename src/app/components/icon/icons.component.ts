import { Component, input} from '@angular/core';
import { IconService } from './icon.service';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: `<span [innerHTML]="svgIcon" [style.color]="color()"></span>`,
  styles: [`
    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    span svg {
      fill: currentColor; /* Toma el color del estilo del elemento */
    }
  `]
})
export class IconComponent {

  name = input<string>('');
  color = input<string>('currentColor')
  svgIcon: any;

  constructor(private iconService: IconService) {}

  ngOnChanges() {
    this.svgIcon = this.iconService.getIcon(this.name());
  }

}
