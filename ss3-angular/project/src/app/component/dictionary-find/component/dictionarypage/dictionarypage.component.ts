import { Component, OnInit } from '@angular/core';
import {Iword} from '../../model/Iword';
import {DictionaryService} from '../../service/dictionary.service';


@Component({
  selector: 'app-dictionarypage',
  templateUrl: './dictionarypage.component.html',
  styleUrls: ['./dictionarypage.component.css']
})
export class DictionarypageComponent implements OnInit {
  dictionaries: Iword[] = [];
  dictionary: Iword;
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.dictionaries = this.dictionaryService.getAll();
  }

  getDictionary(id: any) {
    this.dictionary = this.dictionaryService.findById(id);
  }
}
