import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[colorful]'
})
export class ColorfulDirective {

  private rainbowColors = [
    '#FF0000','#E2571E','#FF7F00','#FFFF00','#00FF00','#96bf33','#0000FF','#4B0082','#8B00FF','#000000'
  ];

  @Input('colorful') fixedColor;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeColor();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeColor();
  }

  private changeColor(){
      const newColorIndex = Math.round(Math.random() * (this.rainbowColors.length));
      this.el.nativeElement.style.color = this.fixedColor || this.rainbowColors[newColorIndex];
  }

}
