import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTracker } from './food-tracker';

describe('FoodTracker', () => {
  let component: FoodTracker;
  let fixture: ComponentFixture<FoodTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodTracker],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodTracker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
