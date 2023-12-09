import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooterSprachenComponent } from './shooter-sprachen.component';

describe('ShooterSprachenComponent', () => {
  let component: ShooterSprachenComponent;
  let fixture: ComponentFixture<ShooterSprachenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShooterSprachenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShooterSprachenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
