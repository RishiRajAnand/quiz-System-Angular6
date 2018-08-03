import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineChoiceComponent } from './inline-choice.component';

describe('InlineChoiceComponent', () => {
  let component: InlineChoiceComponent;
  let fixture: ComponentFixture<InlineChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
