import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { TodoModel } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo = new TodoModel();
  constructor(private todoDataService: TodoDataService) {

  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new TodoModel();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
