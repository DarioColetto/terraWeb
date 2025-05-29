import { Component, HostBinding, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    standalone:true,
    imports:[NgClass],
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  prevIndex = 0
  hide = 'hide'
  

  links = [

    {title:['nuestro', 'servicio'], href:'#',  state:'inactive'},
    {title: ['descubri', 'geotermia'], href:'#descubri', state:'inactive'},
    {title: ['contacto'], href:'#contacto', state:'inactive'}
  ]


  setHoverState(index:number) {
    if(this.links[index].state !== 'active'){
      this.links[index].state =  this.links[index].state === 'hovered'? 'inactive':"hovered";
    }
  }

  activate(index:number) {
    this.links[this.prevIndex].state = 'inactive';
    this.prevIndex = index;
    this.links[index].state = 'active';
  }
  
}






