import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigEditComponent } from './rig-edit.component';

describe('RigEditComponent', () => {
  let component: RigEditComponent;
  let fixture: ComponentFixture<RigEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
