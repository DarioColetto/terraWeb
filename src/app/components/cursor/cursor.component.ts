import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.css'
})
export class CursorComponent {

  @ViewChild('cursor', { static: true }) cursor!: ElementRef<HTMLDivElement>;
  constructor(private renderer:Renderer2){}

  @HostListener('document:mousemove', ['$event'])
  onDocumentMouseMove(event: MouseEvent) {
    
    

    console.log(event.clientX, event.screenY)
    

    this.renderer.setStyle(this.cursor.nativeElement, 'transform', `translate(${event.clientX}px , ${event.clientY}px )`)
  }
}
