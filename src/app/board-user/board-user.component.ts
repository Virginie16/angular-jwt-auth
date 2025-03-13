import { ValideService } from './../_services/valide.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

const API_URL = 'http://localhost:8080/api/select/';

@Component({
  selector: 'app-board-user',
  imports: [FormsModule, CommonModule],
  templateUrl: './board-user.component.html',
  styleUrl: './board-user.component.css',
})
export class BoardUserComponent implements OnInit {
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
