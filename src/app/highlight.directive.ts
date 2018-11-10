import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  constructor(private el: ElementRef) { }


  @HostListener('click', ['$event']) 
    onClick() {
      this.highlight('black')
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


  @Input('appHighlight') highlightColor: string;
  
  @Input('appMultiple') multiple: boolean;

  @Input('appChecked') checked: boolean;

}