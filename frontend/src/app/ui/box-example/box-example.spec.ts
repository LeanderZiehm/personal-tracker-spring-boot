import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxExample } from './box-example';

describe('BoxExample', () => {
  let component: BoxExample;
  let fixture: ComponentFixture<BoxExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxExample],
    }).compileComponents();

    fixture = TestBed.createComponent(BoxExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
