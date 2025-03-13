import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Biocharge } from '../biocharge/biocharge.models';
import { ChangeControl } from '../change-control/change-control.models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  constructor(private http: HttpClient) {}

  private RESULT_API = 'http://localhost:8080/api/result';

  getLotsBiocharges(site: string, produit: string): Observable<Biocharge[]> {
    return this.http.get<Biocharge[]>(
      `${this.RESULT_API}/biocharge?site=${site}&produit=${produit}`,
      httpOptions,
    );
  }

  getLotsChangeControl(
    site: string,
    produit: string,
  ): Observable<ChangeControl[]> {
    return this.http.get<ChangeControl[]>(
      `${this.RESULT_API}/change-control?site=${site}&produit=${produit}`,
      httpOptions,
    );
  }
}
