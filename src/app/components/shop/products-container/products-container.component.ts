import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/products.interface';
import { ShopService } from '../../../services/products.service';
import { CheckoutService } from '../../../services/checkout.service';

@Component({
  selector: 'app-products-container',
  template: `
    <div class="overflow-hidden m-3 text-center rounded shadow-lg p-4 gap-4 flex-wrap align-items-center m-auto items-container container" id="shop-items-container">
        <app-products-card (addToCartClick)="addToCart($event)" [product]="product" *ngFor="let product of products"></app-products-card>
    </div>
  `,
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {
  products!: Product[];

  constructor(private shopService: ShopService, private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: Product): void {
    this.checkoutService.updateCart(product);
  }
}
