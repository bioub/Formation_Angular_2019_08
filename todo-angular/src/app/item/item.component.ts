import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() delete = new EventEmitter<Todo>();

  constructor() { }

  ngDoCheck() {
    console.log('item docheck');

  }

  ngOnInit() {
  }

  handleDelete() {
    this.delete.emit(this.todo);
  }
}
