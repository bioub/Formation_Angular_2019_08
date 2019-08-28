import { Component } from '@angular/core';
import { triggerAsyncId } from 'async_hooks';
import { Todo } from './todo.model';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = [
    {
      id: Math.random(),
      title: 'Acheter du pain',
      completed: true,
    },
    {
      id: Math.random(),
      title: 'Introduire les services Angular',
      completed: false,
    }
  ];

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
