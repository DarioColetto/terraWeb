import { NgClass } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
    selector: 'app-link-bar',
    templateUrl: './link-bar.component.html',
    styleUrl: './link-bar.component.css',
    imports:[NgClass],
    standalone:true
})
export class LinkBarComponent {

  selectedIndex = output<number>()
  prevIndex = 0
  links = [
    {title:'sistema de Recoleccion', state:'active'} , 
    {title:'sistema de distribucion', state:'inactive'},
    {title:'bomba de calor', state:'inactive'}
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
