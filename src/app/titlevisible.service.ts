import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitlevisibleService {

  private title = new BehaviorSubject<string>('Initial State');

  constructor() { }

  updateTitle(nextTitle:string){
    this.title.next(nextTitle);
    console.log(this.title.value)
  }
}
