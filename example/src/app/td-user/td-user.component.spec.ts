import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdUserComponent } from './td-user.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('TdUserComponent', () => {
  let component: TdUserComponent;
  let fixture: ComponentFixture<TdUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdUserComponent ],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
