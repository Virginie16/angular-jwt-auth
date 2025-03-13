import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from '../_services/result.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Biocharge } from './biocharge.models';

@Component({
  selector: 'app-biocharge',
  imports: [FormsModule, CommonModule],
  templateUrl: './biocharge.component.html',
  styleUrl: './biocharge.component.css',
})
export class BiochargeComponent implements OnInit {
  biocharges: Biocharge[] = [];
  errorMessage = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private resultService: ResultService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const site = params['site'];
      const produit = params['produit'];
      if (site && produit) {
        this.loadBiocharges(site, produit);
      } else {
        this.errorMessage = 'Paramètres manquants.';
      }
    });
  }

  loadBiocharges(site: string, produit: string): void {
    this.resultService.getLotsBiocharges(site, produit).subscribe(
      (data) => {
        console.log('Réponse API:', data);
        this.biocharges = data;
      },
      (error) => console.error('Erreur API:', error),
    );
  }
}
