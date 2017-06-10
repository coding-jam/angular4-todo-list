import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from "../models/todo";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];

  @Output() onDone: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output() onUndone: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  markDone(todo: Todo) {
    this.onDone.emit(todo);
  }
  markUndone(todo: Todo) {
    this.onUndone.emit(todo);
  }

}
