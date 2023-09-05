import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioInputComponent } from './bio-input.component';

describe('BioInputComponent', () => {
  let component: BioInputComponent;
  let fixture: ComponentFixture<BioInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioInputComponent]
    });
    fixture = TestBed.createComponent(BioInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
