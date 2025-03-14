import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ValideService } from './valide.service';

describe('ValideService', () => {
  let service: ValideService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), // Provide the HttpClient along with HttpClientTesting
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(ValideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
