import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGModalComponent } from './addgmodal.component';

describe('AddGModalComponent', () => {
  let component: AddGModalComponent;
  let fixture: ComponentFixture<AddGModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
