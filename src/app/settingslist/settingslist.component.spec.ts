import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingslistComponent } from './settingslist.component';

describe('SettingslistComponent', () => {
  let component: SettingslistComponent;
  let fixture: ComponentFixture<SettingslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
