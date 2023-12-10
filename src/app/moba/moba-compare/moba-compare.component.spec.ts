import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobaCompareComponent } from './moba-compare.component';

describe('MobaCompareComponent', () => {
  let component: MobaCompareComponent;
  let fixture: ComponentFixture<MobaCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobaCompareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobaCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
