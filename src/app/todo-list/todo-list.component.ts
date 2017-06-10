import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from "../models/todo";
import {TodoListService} from "../services/todo-list.service";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];

  @Output() onDone: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output() onUndone: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoListService.getAll().subscribe(
      (todos: Todo[]) => {
        todos.forEach(todo => this.todos.push(todo));
      },
      (error: string) => alert(error));
  }

  markDone(todo: Todo) {
    this.onDone.emit(todo);
  }
  markUndone(todo: Todo) {
    this.onUndone.emit(todo);
  }

}
