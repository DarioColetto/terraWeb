import { Injectable } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

type IconEntry = { name: string; src: string };

const ICONS: IconEntry[] = [
  { name: 'arrow-left', src: '/icons/arrow-letf.svg' },
  { name: 'arrow-right', src: '/icons/arrow-right.svg' },
  { name: 'charge', src: '/icons/descubri/charge.svg' },
  {name:'clock' , src:'/icons/descubri/clock.svg'},
  {name: 'eco' , src:'/icons/descubri/eco.svg'},
  {name: 'efficiency' , src:'/icons/descubri/efficiency.svg'},
  {name: 'eye' , src:'/icons/descubri/eye.svg'},
  {name: 'heart' , src:'/icons/descubri/heart.svg'},
  {name: 'hoja',  src:'/icons/descubri/hoja.svg'},
  {name: 'home' , src:'/icons/descubri/home.svg'},
  {name: 'saving' , src:'/icons/descubri/saving.svg'},
  {name: 'whatsapp' , src:'/icons/social/whatsapp.svg'},

  // agrega los que necesites
];

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  private registered = false;

  constructor(private registry: SvgIconRegistryService) {
    this.registerAll();

    

  }

  registerAll(): void {
    if (this.registered) return;
    ICONS.forEach((i) => this.registry.loadSvg( i.src, i.name));
    this.registered = true;
  }




}
