import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobaSprachenComponent } from './moba-sprachen.component';

describe('MobaSprachenComponent', () => {
  let component: MobaSprachenComponent;
  let fixture: ComponentFixture<MobaSprachenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobaSprachenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobaSprachenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
