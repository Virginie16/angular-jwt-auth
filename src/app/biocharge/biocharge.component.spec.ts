import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { BiochargeComponent } from './biocharge.component';
import { ResultService } from '../_services/result.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BiochargeComponent', () => {
  let component: BiochargeComponent;
  let fixture: ComponentFixture<BiochargeComponent>;
  let mockResultService: jasmine.SpyObj<ResultService>;

  beforeEach(async () => {
    // Création d'un mock du service ResultService
    mockResultService = jasmine.createSpyObj('ResultService', [
      'getLotsBiocharges',
    ]);
    mockResultService.getLotsBiocharges.and.returnValue(of([])); // Simule une réponse API vide

    await TestBed.configureTestingModule({
      imports: [BiochargeComponent],
      providers: [
        provideHttpClient(), // Provide the HttpClient along with HttpClientTesting
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ site: 'testSite', produit: 'testProduit' }),
          },
          // Simule un paramètre "id"
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BiochargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
