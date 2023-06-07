import { Injectable } from '@angular/core';
import {Iword} from '../model/Iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: Iword[] = [{
    id: '1',
    word: 'dog',
    mean: 'chó'
  }, {
    id: '2',
    word: 'cat',
    mean: 'mèo'
  }, {
    id: '3',
    word: 'mouse',
    mean: 'chuột'
  },
  ];
  constructor() { }
  getAll() {
    return this.dictionaries;
  }
  public findById(id: string) {
    return this.dictionaries.find(dictionariy => dictionariy.id === id);
  }
}
