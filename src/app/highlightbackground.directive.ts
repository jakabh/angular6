import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightbackgroundDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.backgroundColor = 'beige';
    let newNode = document.createElement('p');
    newNode.innerText = 'this element is highlighted with a directive';
    elRef.nativeElement.appendChild(newNode);
  }

}
