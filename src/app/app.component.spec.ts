import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';
import { EventBusService } from './_shared/event-bus.service';
import { of, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('AppComponent', () => {
  let mockStorageService: jasmine.SpyObj<StorageService>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockEventBusService: jasmine.SpyObj<EventBusService>;

  beforeEach(async () => {
    // Création des mocks
    mockStorageService = jasmine.createSpyObj('StorageService', [
      'isLoggedIn',
      'getUser',
      'clean',
    ]);
    mockAuthService = jasmine.createSpyObj('AuthService', ['logout']);
    mockEventBusService = jasmine.createSpyObj('EventBusService', ['on']);

    // Définition des comportements simulés
    mockStorageService.isLoggedIn.and.returnValue(true); // Simule un utilisateur connecté
    mockStorageService.getUser.and.returnValue({
      username: 'testUser',
      roles: ['ROLE_USER'],
    });
    mockAuthService.logout.and.returnValue(of({})); // Simule un appel API réussi
    spyOn(window.location, 'reload'); // 🚀 Empêche le reload dans les tests
    // Simule l'événement "logout"
    mockEventBusService.on.and.callFake((eventName: string, action: any) => {
      const subscription = of('logout').subscribe(action);
      return subscription; // ✅ Retourne bien une Subscription
    });

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: StorageService, useValue: mockStorageService },
        { provide: AuthService, useValue: mockAuthService },
        { provide: EventBusService, useValue: mockEventBusService },
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } },
      ],
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-jwt-auth' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-jwt-auth');
  });

  it('should call logout on event', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    spyOn(app, 'logout');
    app.ngOnInit(); // Simule l'initialisation du composant

    expect(app.logout).toHaveBeenCalled(); // ✅ Vérifie que logout() est bien exécuté
  });

  it('should render title in an h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'angular-jwt-auth',
    );
  });
});
