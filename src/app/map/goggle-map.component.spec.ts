import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoggleMapComponent } from './goggle-map.component';

describe('GoggleMapComponent', () => {
  let component: GoggleMapComponent;
  let fixture: ComponentFixture<GoggleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoggleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoggleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
