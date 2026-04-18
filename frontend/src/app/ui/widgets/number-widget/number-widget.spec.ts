import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberWidget } from './number-widget';

describe('NumberWidget', () => {
  let component: NumberWidget;
  let fixture: ComponentFixture<NumberWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
