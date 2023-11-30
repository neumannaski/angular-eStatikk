import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamsDataComponent } from './streams-data.component';

describe('StreamsDataComponent', () => {
  let component: StreamsDataComponent;
  let fixture: ComponentFixture<StreamsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
