import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../interfaces/products.interface';
import { ShopService } from '../../../services/products.service';

interface RouteParams {
  category: string;
  id: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  routeParams!: RouteParams;
  categoryDetail!: string;
  idDetail!: string;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
  ) {

  }

  ngOnInit(): void {
    this.categoryDetail = this.route.snapshot.paramMap.get('category')!;
    this.idDetail = this.route.snapshot.paramMap.get('id')!;
    this.shopService.getProducts().subscribe((products: Product[]) => {
      this.product = products.find(
        (product: Product) =>
          product.category === this.categoryDetail && 
          product.id.toString() === this.idDetail
      );
    });
  }

}