import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  newTodo = new Todo();
  @Output() add = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.add.emit({...this.newTodo});
  }

}
