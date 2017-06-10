import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() onNewElement: EventEmitter<string> = new EventEmitter<string>();

  element: string;

  constructor() { }

  ngOnInit() {
    this.element = '';
  }

  addTodo() {
    this.onNewElement.emit(this.element);
    this.element = '';
  }

}
