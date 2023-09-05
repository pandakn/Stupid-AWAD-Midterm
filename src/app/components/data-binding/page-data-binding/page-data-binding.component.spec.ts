import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDataBindingComponent } from './page-data-binding.component';

describe('PageDataBindingComponent', () => {
  let component: PageDataBindingComponent;
  let fixture: ComponentFixture<PageDataBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageDataBindingComponent],
    });
    fixture = TestBed.createComponent(PageDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
