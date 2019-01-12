import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdUserComponent } from './td-user.component';

describe('TdUserComponent', () => {
  let component: TdUserComponent;
  let fixture: ComponentFixture<TdUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdUserComponent ]
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
