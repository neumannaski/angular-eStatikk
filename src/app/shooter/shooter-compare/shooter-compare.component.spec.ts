import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooterCompareComponent } from './shooter-compare.component';

describe('ShooterCompareComponent', () => {
  let component: ShooterCompareComponent;
  let fixture: ComponentFixture<ShooterCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShooterCompareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShooterCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
