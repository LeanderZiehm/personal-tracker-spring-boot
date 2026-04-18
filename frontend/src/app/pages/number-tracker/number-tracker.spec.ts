import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTracker } from './number-tracker';

describe('NumberTracker', () => {
  let component: NumberTracker;
  let fixture: ComponentFixture<NumberTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberTracker],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
