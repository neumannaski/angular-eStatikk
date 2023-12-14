import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvgtwitchdataComponent } from '../avgtwitchdata/avgtwitchdata.component';
import { LpTournamentComponent } from './lp-tournament.component';

describe('LpTournamentComponent', () => {
  let component: LpTournamentComponent;
  let fixture: ComponentFixture<LpTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpTournamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
