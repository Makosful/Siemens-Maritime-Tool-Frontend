import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigAddComponent } from './rig-add.component';

describe('RigAddComponent', () => {
  let component: RigAddComponent;
  let fixture: ComponentFixture<RigAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
