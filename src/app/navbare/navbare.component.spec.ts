import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbareComponent } from './navbare.component';

describe('NavbareComponent', () => {
  let component: NavbareComponent;
  let fixture: ComponentFixture<NavbareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbareComponent]
    });
    fixture = TestBed.createComponent(NavbareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
