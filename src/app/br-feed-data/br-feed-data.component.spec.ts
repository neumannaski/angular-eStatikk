import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrFeedDataComponent } from './br-feed-data.component';

describe('BrFeedDataComponent', () => {
  let component: BrFeedDataComponent;
  let fixture: ComponentFixture<BrFeedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrFeedDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrFeedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
