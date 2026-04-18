import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathTracker } from './math-tracker';

describe('MathTracker', () => {
  let component: MathTracker;
  let fixture: ComponentFixture<MathTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathTracker],
    }).compileComponents();

    fixture = TestBed.createComponent(MathTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
