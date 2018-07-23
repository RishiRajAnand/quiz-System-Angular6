import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCaseComponent } from './medical-case.component';

describe('MedicalCaseComponent', () => {
  let component: MedicalCaseComponent;
  let fixture: ComponentFixture<MedicalCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
