import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class ValideService {
  constructor(private http: HttpClient) {}

  private VALIDE_API = 'http://localhost:8080/api/select';

  // Méthode pour récupérer les sites
  getSites(): Observable<string[]> {
    return this.http.get<string[]>(
      `${this.VALIDE_API}/sites`,
      httpOptions, // Permet d'envoyer les cookies avec la requête
    );
  }

  // Méthode pour récupérer les produits
  getProduits(): Observable<string[]> {
    return this.http.get<string[]>(`${this.VALIDE_API}/produits`, httpOptions);
  }

  public post(url: string, data: any, options?: any) {
    return this.http.post(url, data, options);
  }
  public put(url: string, data: any, options?: any) {
    return this.http.put(url, data, options);
  }
  public delete(url: string, options?: any) {
    return this.http.delete(url, options);
  }
}
