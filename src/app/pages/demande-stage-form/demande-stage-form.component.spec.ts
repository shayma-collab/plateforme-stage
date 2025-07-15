import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeStageFormComponent } from './demande-stage-form.component';

describe('DemandeStageFormComponent', () => {
  let component: DemandeStageFormComponent;
  let fixture: ComponentFixture<DemandeStageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeStageFormComponent]
    });
    fixture = TestBed.createComponent(DemandeStageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
