import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigDetailsComponent } from './rig-details.component';

describe('RigDetailsComponent', () => {
  let component: RigDetailsComponent;
  let fixture: ComponentFixture<RigDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
