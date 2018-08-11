import {Directive, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appLifeCycleSnooper]'
})
export class LifeCycleSnooperDirective implements OnInit, OnDestroy, OnChanges {
  ngOnInit(): void {
    console.log('OnInit phase');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy phase');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  constructor() { }

}
