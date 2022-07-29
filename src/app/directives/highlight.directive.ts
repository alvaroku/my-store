import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter')onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = "blue";
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = "green";
  }
  constructor(private element:ElementRef) {
    this.element.nativeElement.style.backgroundColor = "green";
    this.element.nativeElement.style.color =  "white";
    this.element.nativeElement.style.padding = "15px 32px";
    this.element.nativeElement.style.textAlign = "center";
   }

}
