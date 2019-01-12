import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormComponent } from './react-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('ReactFormComponent', () => {
  let component: ReactFormComponent;
  let fixture: ComponentFixture<ReactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactFormComponent ],
      imports: [ReactiveFormsModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});