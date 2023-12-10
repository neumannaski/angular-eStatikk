import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpTeamComponent } from './lp-team.component';

describe('LpTeamComponent', () => {
  let component: LpTeamComponent;
  let fixture: ComponentFixture<LpTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
