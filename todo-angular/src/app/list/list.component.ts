import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

  @Input() items;

  @Output() delete = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  handleDelete(todo) {
    this.delete.emit(todo);
  }
}
