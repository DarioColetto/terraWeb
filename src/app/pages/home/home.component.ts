import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-home',
    imports: [NgClass],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    providers: []
})
export class HomeComponent {

    indexSelected?: null | number = null;
    hideLogo: boolean = false;
   

    switchText(index: number | null){
        this.toggleClass(index);
        this.indexSelected = index;
       
    }

    //A funtion that toggles the class active and let the other elemetnts without the class active
    // It receives the index of the element to toggle
    toggleClass(index: number | null) {
        const elements = document.querySelectorAll('h3');
        elements.forEach((element, i) => {
            if (i === index) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });

    }



    
hideLogoHandler(event: MouseEvent, isEnter: boolean) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('title')) {
    }
    
    this.hideLogo = isEnter;
}
   
}
