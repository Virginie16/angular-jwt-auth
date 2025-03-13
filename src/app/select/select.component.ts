import { Component, OnInit } from '@angular/core';
import { ValideService } from '../_services/valide.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select',
  imports: [FormsModule, CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent implements OnInit {
  produits: string[] = [];
  sites: string[] = [];
  selectedProduit = '';
  selectedSite = '';
  errorMessage = '';
  action: any;

  constructor(
    private valideService: ValideService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadProduits();
    this.loadSites();
  }

  loadProduits(): void {
    this.valideService.getProduits().subscribe(
      (data) => {
        this.produits = data;
        console.log('Produits:', this.produits);
      },
      (error) => {
        console.error('Error fetching produits:', error);
      },
    );
  }

  loadSites(): void {
    this.valideService.getSites().subscribe(
      (data) => {
        this.sites = data;
        console.log('Sites:', this.sites);
      },
      (error) => {
        console.error('Error fetching sites:', error);
      },
    );
  }

  onSubmit(action: string): void {
    if (!this.selectedProduit || !this.selectedSite) {
      this.errorMessage = 'Veuillez sélectionner un site et un produit.';
      return;
    }

    this.router.navigate([`/${action}`], {
      queryParams: { site: this.selectedSite, produit: this.selectedProduit },
    });
  }
}
