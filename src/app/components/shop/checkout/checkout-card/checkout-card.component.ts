import { Component, Input } from '@angular/core';
import { Product } from '../../../../interfaces/products.interface';

@Component({
  selector: 'app-checkout-card',
  templateUrl: './checkout-card.component.html',
  styleUrls: ['./checkout-card.component.css']
})
export class CheckoutCardComponent {
  @Input() cart!: Product[];
}
