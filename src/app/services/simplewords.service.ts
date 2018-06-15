
import { Injectable } from '@angular/core';
import { Word } from '../models/word';
@Injectable({
  providedIn: 'root'
})
export class SimplewordsService {
  words: Word[];

  constructor() {
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
