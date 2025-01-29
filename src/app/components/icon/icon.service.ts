import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from './icon-registry';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  constructor(private sanitizer: DomSanitizer) {}

  getIcon(iconName: string): SafeHtml | null {
    const icon = ICONS[iconName];
    return icon ? this.sanitizer.bypassSecurityTrustHtml(icon) : null;
  }

}