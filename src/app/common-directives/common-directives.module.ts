import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorfulDirective} from "./colorful.directive";
import {WithDelayDirective} from "./with-delay.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ColorfulDirective,
    WithDelayDirective
  ],
  declarations: [
    ColorfulDirective,
    WithDelayDirective
  ]
})
export class CommonDirectivesModule { }
