import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddloginComponent } from './addlogin.component';

describe('AddloginComponent', () => {
  let component: AddloginComponent;
  let fixture: ComponentFixture<AddloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddloginComponent]
    });
    fixture = TestBed.createComponent(AddloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
