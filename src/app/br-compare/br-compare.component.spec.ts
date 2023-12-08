import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrCompareComponent } from './br-compare.component';

describe('BrCompareComponent', () => {
  let component: BrCompareComponent;
  let fixture: ComponentFixture<BrCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrCompareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
