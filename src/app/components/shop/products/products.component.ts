import { Component } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  total$ = this.checkoutService.totalAction$;

  constructor(private checkoutService: CheckoutService) {}
}
