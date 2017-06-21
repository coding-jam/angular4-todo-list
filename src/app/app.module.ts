import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {TodoListService} from "./services/todo-list.service";
import {NotFoundComponent} from './not-found/not-found.component';
import {TodosModule} from "./todos/todos.module";

import {CommonDirectivesModule} from "./common-directives/common-directives.module";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/throw';

const routes:Routes = [
  {
    path: 'done', loadChildren: 'app/done-list/done-list.module#DoneListModule'
  },
  {
    path: '', redirectTo: '/todos', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    TodosModule,
    BrowserModule,
    HttpModule,
    CommonDirectivesModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
