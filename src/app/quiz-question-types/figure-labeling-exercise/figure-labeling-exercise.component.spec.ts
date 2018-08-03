import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureLabelingExerciseComponent } from './figure-labeling-exercise.component';

describe('FigureLabelingExerciseComponent', () => {
  let component: FigureLabelingExerciseComponent;
  let fixture: ComponentFixture<FigureLabelingExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigureLabelingExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureLabelingExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
