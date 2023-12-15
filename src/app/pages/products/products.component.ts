import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  private _apiService = inject(ApiService);
  private _router = inject(Router);
  productList: Product[] = [];

  public navegate(id: number): void {
    this._router.navigate(['/products', id]);
    console.log();
  }

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data) => {
      this.productList = data;
    });
  }
}
