import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigListComponent } from './rig-list.component';

describe('RigListComponent', () => {
  let component: RigListComponent;
  let fixture: ComponentFixture<RigListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
