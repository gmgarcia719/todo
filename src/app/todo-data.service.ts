import { Injectable } from '@angular/core';
import { TodoModel } from './todo.model';

@Injectable()
export class TodoDataService {


  lastId: number = 0;


  todos: TodoModel[] = [];

  constructor() {
  }


  addTodo(todo: TodoModel) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  deleteTodoById(id: number) {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}) {
    let todo = this.todos.find(todo => {
      return todo.id === id;
    });

    if (!todo) {
      return null;
    }
    else {
      Object.assign(todo, values);
      return todo;
    }

  }


  getAllTodos() {
    return this.todos;
  }

  toggleTodoComplete(todo: TodoModel) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
