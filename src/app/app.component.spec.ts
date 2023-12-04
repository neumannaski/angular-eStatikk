import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NavigationEnd, Router} from '@angular/router';
import { Subject } from 'rxjs';

describe('AppComponent', () => {
  let router: Router;
  const eventsSubject = new Subject(); // Create a Subject to act as a publisher for mock events

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: Router,
          useValue: {
            events: eventsSubject.asObservable(), // Use the subject as the source of router events
            // Add any other Router methods that you need to mock
          }
        }
      ]
    }).compileComponents();
    router = TestBed.inject(Router);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set isHomePage to true for root path', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Emit a mock NavigationEnd event
    eventsSubject.next(new NavigationEnd(1, '/', '/'));

    fixture.detectChanges(); // Trigger change detection
    expect(app.isHomePage).toBeTrue();
  });

  // ... other tests ...
});
