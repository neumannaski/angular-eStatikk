import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShooterFeedDataComponent } from './shooter-feed-data.component';

describe('ShooterFeedDataComponent', () => {
  let component: ShooterFeedDataComponent;
  let fixture: ComponentFixture<ShooterFeedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShooterFeedDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShooterFeedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
