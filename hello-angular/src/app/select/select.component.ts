import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, HostListener, ElementRef } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class SelectComponent implements OnInit {

  @Input() selected: string;
  @Input() items: string[] = [];
  @Input() opened = false;

  @Output() selectedChange = new EventEmitter<string>();

  constructor(protected host: ElementRef) {
    
  }

  ngOnInit() {
    if (!this.items.length) {
      throw new Error('items is mandatory');
    }
    this.selected = this.selected || this.items[0];
  }

  handleSelected(item: string) {
    this.selected = item;
    this.selectedChange.emit(item);
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const hostElt = this.host.nativeElement as HTMLElement;
    const targetElt = event.target as HTMLElement;

    if (hostElt.contains(targetElt)) {
      this.opened = !this.opened;
      return;
    }

    this.opened = false;
  }
}
