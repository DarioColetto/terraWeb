import { Component, output } from '@angular/core';
import { SocialComponent } from '../social/social.component';
import { CotanctCardComponent } from '../cotanct-card/cotanct-card.component';
import { NgClass } from '@angular/common';

@Component({
    standalone:true,
    imports:[SocialComponent,NgClass],
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  
  // opened:boolean = true
  

  // open() {
  //   this.opened = !this.opened
  // }

  selectedIndex = output<number>()
  prevIndex = 0

  links = [
    {title: ['home'], href:'#home', state:'active'} , 
    {title:['nuestro', 'servicio'], href:'#',  state:'inactive'},
    {title: ['descubri', 'geotermia'], href:'#descubri', state:'inactive'},
    {title: ['contacto'], href:'#contacto', state:'inactive'}
  ]

  getSelectedIndex(index: number) {
    this.selectedIndex.emit(index)
  }

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
