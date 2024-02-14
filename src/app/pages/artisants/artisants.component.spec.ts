import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisantsComponent } from './artisants.component';

describe('ArtisantsComponent', () => {
  let component: ArtisantsComponent;
  let fixture: ComponentFixture<ArtisantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtisantsComponent]
    });
    fixture = TestBed.createComponent(ArtisantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
