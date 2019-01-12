import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondsubComponent } from './secondsub.component';

describe('SecondsubComponent', () => {
  let component: SecondsubComponent;
  let fixture: ComponentFixture<SecondsubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondsubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
