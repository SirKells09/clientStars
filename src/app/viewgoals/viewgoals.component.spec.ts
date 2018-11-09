import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgoalsComponent } from './viewgoals.component';

describe('ViewgoalsComponent', () => {
  let component: ViewgoalsComponent;
  let fixture: ComponentFixture<ViewgoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
