import { 
  Directive, 
  ElementRef, 
  inject, 
  input, 
  output, 
  PLATFORM_ID,
  AfterViewInit,
  OnDestroy 
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Directive({
  selector: '[appViewportObserver]',
  standalone: true
})
export class ViewportObserverDirective implements AfterViewInit, OnDestroy {
  rootMargin = input<string>('0px');
  threshold = input<number | number[]>(0.9);
  title = input<string>('');
  
  isVisible = output<string>();
  
  private observer: IntersectionObserver | null = null;
  private platformId: Object = inject(PLATFORM_ID);
  private el = inject(ElementRef);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible.emit(this.title());
      
          }
        },
        {
          root: null,
          rootMargin: this.rootMargin(),
          threshold: this.threshold(),
        }
      );
      
      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}