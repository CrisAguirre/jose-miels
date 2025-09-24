import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from "../interfaces/products.interface";

@Injectable({
  providedIn: 'root'
})

export class CheckoutService {
    products: Product[] = [];

    private cartSubject = new BehaviorSubject<Product[]>([]);
    private totalSubject = new BehaviorSubject<number>(0);
    private quantitySubject = new BehaviorSubject<number>(0);
  
    // Cuando trabajamos con un observable le colocamos un simbolo de dolar al final
    // Estos observables le decimos que esten disponibles para utilizarlos dentro de la app
    get totalAction$(): Observable<number> {
      return this.totalSubject.asObservable();
    }
    get quantityAction$(): Observable<number> {
      return this.quantitySubject.asObservable();
    }
    get cartAction$(): Observable<Product[]> {
      return this.cartSubject.asObservable();
    }
  
    updateCart(product: Product): void {
      this.addToCart(product);
      this.quantityProducts();
      this.calcTotal();
    }
  
    resetCart(): void {
      this.cartSubject.next([]);
      this.totalSubject.next(0);
      this.quantitySubject.next(0);
      this.products = [];
    }

    getDiscount(): number {
      const total = this.totalSubject.value;
      return total * 0.1; // Retorna el 10% del totalSubject
    }
  
    private addToCart(product: Product): void {
      const isProductInCart = this.products.find(({ id, category }) => id == product.id && category == product.category)
  
      if (isProductInCart) {
        isProductInCart.qty += 1;
      } else {
        this.products.push({ ...product, qty: 1 })
      }
  
      this.cartSubject.next(this.products);
    }
  
    private quantityProducts(): void {
      const quantity = this.products.reduce((acc, prod) => acc += prod.qty, 0);
      this.quantitySubject.next(quantity);
    }
  
    private calcTotal(): void {
      const total = this.products.reduce((acc, prod) => acc += (prod.price * prod.qty), 0);
      this.totalSubject.next(total);
    } 

}