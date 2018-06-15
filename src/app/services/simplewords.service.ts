
import { Injectable } from '@angular/core';
import { Word } from '../models/Word';
@Injectable({
  providedIn: 'root'
})
export class SimplewordsService {
  words: Word[];

  constructor() {
    console.log('hello world -- service is running');
    this.words = [
      {
        english: 'bird',
        esperanto: 'birdo'
      }, {
        english: 'apple',
        esperanto: 'pomo'
      }, {
        english: 'dog',
        esperanto: 'hundo'
      }, {
        english: 'man',
        esperanto: 'homo'
      }
    ];
  }
}
