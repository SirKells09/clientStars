import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGModalComponent } from './updategmodal.component';

describe('UpdateGModalComponent', () => {
  let component: UpdateGModalComponent;
  let fixture: ComponentFixture<UpdateGModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
