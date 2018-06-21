import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todos = [];
  private archiveTodos = [];

  constructor(public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }

archiveTodo(todoIndex) {
  let todoToBeArchived = this.todos[todoIndex];
  this.todos.splice(todoIndex, 1);
  this.archiveTodos.push(todoToBeArchived);
}

  getTodos() {
    return this.todos;
  }

  getArchiveTodos() {
    return this.archiveTodos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  editTodo(todo, todoIndex) {
    this.todos[todoIndex] = todo;
  }

  redoTodo(todoIndex) {
    let todoToBeArchived = this.archiveTodos[todoIndex];
    this.archiveTodos.splice(todoIndex, 1);
    this.todos.push(todoToBeArchived);
  }

  archiveddelete(todoIndex) {
    this.archiveTodos.splice(todoIndex, 1);
  }

}
