import { Directive, ElementRef, HostListener, Input } from '@angular/core';
 
@Directive({
  selector: '[appStar]'
})

export class StarDirective {
  constructor(private el: ElementRef) { }
 
  @HostListener('mouseclick') onMouseClick() {
    this.star('black');
  }
 
  private star(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input() starColor: string;
}