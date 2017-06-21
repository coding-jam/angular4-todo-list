import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {DoneListComponent} from "./done-list.component";

import {CommonDirectivesModule} from "../common-directives/common-directives.module";

const doneRoutes:Routes = [
  {
    path: '', component: DoneListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(doneRoutes),
    CommonDirectivesModule
  ],
  declarations: [
    DoneListComponent
  ]
})
export class DoneListModule { }
