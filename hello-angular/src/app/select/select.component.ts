import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() selected: string;
  @Input() items: string[] = [];

  @Output() selectedChange = new EventEmitter<string>();

  constructor() {
    
  }

  ngOnInit() {
    if (!this.items.length) {
      throw new Error('items is mandatory');
    }
    this.selected = this.selected || this.items[0];
  }

  handleSelected(item: string) {
    this.selectedChange.emit(item);
  }
}
