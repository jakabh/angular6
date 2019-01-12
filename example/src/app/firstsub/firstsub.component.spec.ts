import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstsubComponent } from './firstsub.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('FirstsubComponent', () => {
  let component: FirstsubComponent;
  let fixture: ComponentFixture<FirstsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstsubComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});