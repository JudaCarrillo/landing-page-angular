import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  private _route = inject(ActivatedRoute);
  private _apiService = inject(ApiService);

  public product?: Product;
  loading = true;

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService.getProductById(params['id']).subscribe((data) => {
        console.log(data);
        this.product = data;
        this.loading = false;
      });
    });
  }
}
