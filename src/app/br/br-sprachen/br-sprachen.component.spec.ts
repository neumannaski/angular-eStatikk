import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrSprachenComponent } from './br-sprachen.component';

describe('BrSprachenComponent', () => {
  let component: BrSprachenComponent;
  let fixture: ComponentFixture<BrSprachenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrSprachenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrSprachenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
