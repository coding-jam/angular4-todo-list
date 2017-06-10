import { Component, Input } from '@angular/core';
import {Todo} from "../models/todo";
import {TodoListService} from "../services/todo-list.service";

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {

  public todoList: Todo[] = [];

  constructor(private _todoListService: TodoListService) {}

  addNewElement(element: string) {
    let todo = {id: this.todoList.length + 1, text: element, done: false};
    this._todoListService.store(todo)
        .subscribe(t => this.todoList.push(t), alert);
  }

  markDone(todo: Todo) {
    todo.done = true;
    this.mark(todo);
  }

  markUndone(todo: Todo) {
    todo.done = false;
    this.mark(todo);
  }

  private mark(todo: Todo) {
    this._todoListService.update(todo)
        .subscribe(console.log, alert);
  }

}
