import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgtwitchdataComponent } from './avgtwitchdata.component';

describe('AvgtwitchdataComponent', () => {
  let component: AvgtwitchdataComponent;
  let fixture: ComponentFixture<AvgtwitchdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgtwitchdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgtwitchdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
