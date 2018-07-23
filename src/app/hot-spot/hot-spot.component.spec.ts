import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSpotComponent } from './hot-spot.component';

describe('HotSpotComponent', () => {
  let component: HotSpotComponent;
  let fixture: ComponentFixture<HotSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
