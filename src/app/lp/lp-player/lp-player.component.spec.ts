import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpPlayerComponent } from './lp-player.component';

describe('LpPlayerComponent', () => {
  let component: LpPlayerComponent;
  let fixture: ComponentFixture<LpPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
