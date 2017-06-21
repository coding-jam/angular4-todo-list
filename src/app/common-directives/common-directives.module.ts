import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorfulDirective} from "./colorful.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ColorfulDirective
  ],
  declarations: [
    ColorfulDirective
  ]
})
export class CommonDirectivesModule { }
