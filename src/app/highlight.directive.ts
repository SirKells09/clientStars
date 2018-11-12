import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  constructor(private el: ElementRef) { }


  @HostListener('click', ['$event']) 
    onClick() {
      this.highlight('blue');
      // this.multiple('multiple');
      // this.checked('checked');

  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.background = color;
  }

  // private multiple(multiple: string) {
  //   this.el.nativeElement.style = multiple;
  // }

  // private checked(checked: string) {
  //   this.el.nativeElement = checked;
  // }

  @Input('appHighlight') highlightColor: string;
  
  // @Input('multiple') multiple: boolean;

  // @Input('checked') checked: boolean;

}