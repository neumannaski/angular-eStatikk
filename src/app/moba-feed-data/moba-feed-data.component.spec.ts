import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobaFeedDataComponent } from './moba-feed-data.component';

describe('MobaFeedDataComponent', () => {
  let component: MobaFeedDataComponent;
  let fixture: ComponentFixture<MobaFeedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobaFeedDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobaFeedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
