import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {TodosComponent} from "./todos.component";
import {TodoFormComponent} from "../todo-form/todo-form.component";
import {TodoListComponent} from "../todo-list/todo-list.component";

const todosRoutes:Routes = [
  {
    path: 'todos', component: TodosComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(todosRoutes),
  ],
  declarations: [
    TodoFormComponent,
    TodosComponent,
    TodoListComponent,
  ]
})
export class TodosModule {
}
