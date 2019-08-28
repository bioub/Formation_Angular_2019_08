export class Todo {
  id = Math.random();
  title: string;
  completed = false;

  constructor(title = '') {
    this.title = title;
  }
}
