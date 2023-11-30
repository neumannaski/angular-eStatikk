import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBarColumnComponent } from './multi-bar-column.component';

describe('MultiBarColumnComponent', () => {
  let component: MultiBarColumnComponent;
  let fixture: ComponentFixture<MultiBarColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiBarColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiBarColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
