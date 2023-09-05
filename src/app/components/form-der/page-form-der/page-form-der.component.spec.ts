import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormDerComponent } from './page-form-der.component';

describe('PageFormDerComponent', () => {
  let component: PageFormDerComponent;
  let fixture: ComponentFixture<PageFormDerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFormDerComponent]
    });
    fixture = TestBed.createComponent(PageFormDerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
