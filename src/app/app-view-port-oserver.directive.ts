import { Directive, ElementRef, EventEmitter, inject,  input,  Input, output, Output,  PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TitlevisibleService } from './titlevisible.service';

@Directive({
  selector: '[appViewportObserver]',
  standalone: true
})
export class ViewportObserverDirective{

  rootMargin = input<string>('0px');
  title = input<string>('')
  isVisible = output<string>()
   

  private observer: IntersectionObserver | undefined;
  private platformId: Object = inject(PLATFORM_ID)
  private titleVisbleService  = inject(TitlevisibleService)

  constructor(
    private el: ElementRef
  ) {}

  

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
        this.titleVisbleService.updateTitle(this.title());
        }
      },
      {
        root: null, // Observe within the viewport
        rootMargin: '0px',
        threshold: 1.0,
      }
    );
  
    this.observer.observe(this.el.nativeElement);
  }
}

  // ngOnDestroy(): void {
  //   if (this.observer) {
  //     this.observer.disconnect();
  //   }
  // }
}