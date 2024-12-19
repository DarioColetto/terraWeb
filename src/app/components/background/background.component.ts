import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent {

  mouseX: number = 0;
  mouseY: number = 0;
  difX: number = 0;
  difY: number = 0;
  @ViewChild('bg', { static: true }) bg!: ElementRef<HTMLDivElement>;

  constructor(private elementRef: ElementRef, private renderer:Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onDocumentMouseMove(event: MouseEvent) {
    
    this.difX += event.movementX
    this.difY += event.movementY

    

    this.renderer.setStyle(this.bg.nativeElement, 'transform', `scale(1.3) translate(${this.difX * 0.05}px , ${this.difY * 0.05}px )`)
  }

}
