import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    providers: []
})
export class HomeComponent {

    indexSelected = 0;

    switchText(index: number){
        this.toggleClass(index);
        this.indexSelected = index;
       
    }

    //A funtion that toggles the class active and let the other elemetnts without the class active
    // It receives the index of the element to toggle
    toggleClass(index: number) {
        const elements = document.querySelectorAll('.title');
        elements.forEach((element, i) => {
            if (i === index) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });

    }

   
}
