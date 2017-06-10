import { Injectable } from '@angular/core';
import {Todo} from "../models/todo";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class TodoListService {

  private static baseUrl = '/api';

  constructor(private http: Http) {}

  store(todo: Todo) {
    console.log('Storing' + todo);
    return this.http.post(TodoListService.baseUrl + '/todos', todo)
        .map(resp => resp.json())
        .catch(res => {
          console.error(res.toString());
          return Observable.throw(res.message || 'Server error')
        });
  }

  getAll() {
    return this.http.get(TodoListService.baseUrl + '/todos')
        .map(res => res.json())
        .do(data => console.log(data)) // eyeball results in the console
        .catch(res => {
          console.error(res.toString());
          return Observable.throw(res.message || 'Server error')
        });
  }

  update(todo: Todo) {
    console.log('Update');

    return this.http.put(TodoListService.baseUrl + '/todos/' + todo.id, todo)
        .catch(res => {
          console.error(res.toString());
          return Observable.throw(res.message || 'Server error')
        });
  }
}
