import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {DoneListComponent} from "./done-list.component";

const doneRoutes:Routes = [
  {
    path: 'done', component: DoneListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(doneRoutes),
  ],
  declarations: [
    DoneListComponent
  ]
})
export class DoneListModule {
}
