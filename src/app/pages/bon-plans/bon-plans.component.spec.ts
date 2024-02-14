import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonPlansComponent } from './bon-plans.component';

describe('BonPlansComponent', () => {
  let component: BonPlansComponent;
  let fixture: ComponentFixture<BonPlansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BonPlansComponent]
    });
    fixture = TestBed.createComponent(BonPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
