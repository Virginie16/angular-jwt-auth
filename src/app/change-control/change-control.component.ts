import { Component, OnInit } from '@angular/core';
import { ChangeControl } from './change-control.models';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from '../_services/result.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-control',
  imports: [FormsModule, CommonModule],
  templateUrl: './change-control.component.html',
  styleUrl: './change-control.component.css',
})
export class ChangeControlComponent implements OnInit {
  changeControls: ChangeControl[] = [];
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
        this.loadChangeControls(site, produit);
      } else {
        this.errorMessage = 'Paramètres manquants.';
      }
    });
  }

  loadChangeControls(site: string, produit: string): void {
    this.resultService.getLotsChangeControl(site, produit).subscribe(
      (data) => {
        console.log('Réponse API:', data);
        this.changeControls = data;
      },
      (error) => console.error('Erreur API:', error),
    );
  }
}
