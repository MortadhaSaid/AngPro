import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TF1Component } from './tf1.component';

describe('TF1Component', () => {
  let component: TF1Component;
  let fixture: ComponentFixture<TF1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TF1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
