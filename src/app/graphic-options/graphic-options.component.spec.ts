import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicOptionsComponent } from './graphic-options.component';

describe('GraphicOptionsComponent', () => {
  let component: GraphicOptionsComponent;
  let fixture: ComponentFixture<GraphicOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
