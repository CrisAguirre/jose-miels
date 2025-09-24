import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private products: Product[] = [
    {
      name: 'iPhone 14 Pro Max',
      description:
        'Silver, 128GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine',
      category: 'iphone',
      id: 3,
      price: 1099,
      identifier: 'iPhone 14 Pro Max 128GB',
      img: '../../assets/img/itemsShop/iphone1.jpeg',
      qty: 1,
    },
    {
      name: 'iPhone 14 Pro',
      description:
        'Silver, 128GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine',
      category: 'iphone',
      id: 3,
      price: 999,
      identifier: 'iPhone 14 Pro 128GB',
      img: '../../assets/img/itemsShop/iphone3.jpeg',
      qty: 1,
    },
    {
      name: 'iPhone 14 Pro',
      description:
        'Space Black, 1TB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine',
      category: 'iphone',
      id: 4,
      price: 1599,
      identifier: 'iPhone 14 Pro 1TB',
      img: '../../assets/img/itemsShop/iphone4.jpeg',
      qty: 1,
    },
    {
      name: 'iPhone 14',
      description:
        '(PRODUCT)RED, 512GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine',
      category: 'iphone',
      id: 5,
      price: 1099,
      identifier: 'iPhone 14 512GB',
      img: '../../assets/img/itemsShop/iphone5.jpeg',
      qty: 1,
    },
    {
      name: 'iPhone 14',
      description:
        'Starlight, 128GB, A15 Bionic chip, 6‑core CPU with 2 performance and 4 efficiency cores, 5‑core GPU, 16‑core Neural Engine',
      category: 'iphone',
      id: 6,
      price: 799,
      identifier: 'iPhone 14 128GB',
      img: '../../assets/img/itemsShop/iphone6.jpeg',
      qty: 1,
    },
    {
      name: 'AirPods',
      description:
        '(3rd generation) with MagSafe Charging Case, Dual beamforming microphones, Dual optical sensors, Motion-detecting accelerometer, Up to 5 hours of listening',
      category: 'airpods',
      id: 1,
      price: 179,
      identifier: 'AirPods 3rd generation',
      img: '../../assets/img/itemsShop/airpods1.jpeg',
      qty: 1,
    },
    {
      name: 'AirPods Pro',
      description:
        '(2nd generation), Dual beamforming microphones, Dual optical sensors, Motion-detecting accelerometer, Up to 5 hours of listening time with a single charge',
      category: 'airpods',
      id: 2,
      price: 249,
      identifier: 'AirPods Pro 2nd generation',
      img: '../../assets/img/itemsShop/airpods2.jpeg',
      qty: 1,
    },
    {
      name: 'AirPods',
      description:
        '(2nd generation), Dual beamforming microphones, Dual optical sensors, Motion-detecting accelerometer, Up to 5 hours of listening time with a single charge',
      category: 'airpods',
      id: 3,
      price: 129,
      identifier: 'AirPods 2nd generation',
      img: '../../assets/img/itemsShop/airpods3.jpeg',
      qty: 1,
    },
    {
      name: '14‑inch MacBook Pro - Space Gray',
      description:
        'Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine, 16GB unified memory, 512GB SSD storage',
      category: 'macbook',
      id: 1,
      price: 1999,
      identifier: '14‑inch MacBook Pro 16GB 512GB',
      img: '../../assets/img/itemsShop/macbook1.jpeg',
      qty: 1,
    },
    {
      name: '14‑inch MacBook Pro - Space Gray',
      description:
        'Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine, 32GB unified memory, 1TB SSD storage',
      category: 'macbook',
      id: 2,
      price: 2599,
      identifier: '14‑inch MacBook Pro 32GB 1TB',
      img: '../../assets/img/itemsShop/macbook2.jpeg',
      qty: 1,
    },
    {
      name: '16‑inch MacBook Pro - Space Gray',
      description:
        'Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine, 16GB unified memory, 512GB SSD storage',
      category: 'macbook',
      id: 3,
      price: 2499,
      identifier: '16‑inch MacBook Pro 16GB 512GB',
      img: '../../assets/img/itemsShop/macbook3.jpeg',
      qty: 1,
    },
    {
      name: '16‑inch MacBook Pro - Space Gray',
      description:
        'Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine, 32GB unified memory, 1TB SSD storage',
      category: 'macbook',
      id: 4,
      price: 3099,
      identifier: '16‑inch MacBook Pro 32GB 1TB',
      img: '../../assets/img/itemsShop/macbook4.jpeg',
      qty: 1,
    },
    {
      name: 'MacBook Air - Midnight',
      description:
        'Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine, 8GB unified memory, 256GB SSD storage',
      category: 'macbook',
      id: 5,
      price: 1199,
      identifier: 'MacBook Air 8GB 256GB',
      img: '../../assets/img/itemsShop/macbook5.jpeg',
      qty: 1,
    },
    {
      name: 'MacBook Air - Midnight',
      description:
        'Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine, 16GB unified memory, 512GB SSD storage',
      category: 'macbook',
      id: 6,
      price: 1599,
      identifier: 'MacBook Air 16GB 512GB',
      img: '../../assets/img/itemsShop/macbook6.jpeg',
      qty: 1,
    },
    {
      name: 'iPad Air',
      description:
        'Space Gray, 64GB, Wi-Fi only, USB‑C Charge Cable (1 meter), 20W USB‑C Power Adapter',
      category: 'ipad',
      id: 1,
      price: 599,
      identifier: 'iPad Air 64GB Wi-Fi',
      img: '../../assets/img/itemsShop/ipad1.jpeg',
      qty: 1,
    },
    {
      name: 'iPad Air',
      description:
        'Space Gray, 256GB, Wi-Fi + Celular, USB‑C Charge Cable (1 meter), 20W USB‑C Power Adapter',
      category: 'ipad',
      id: 2,
      price: 899,
      identifier: 'iPad Air 258GB Wi-Fi + Celular',
      img: '../../assets/img/itemsShop/ipad2.jpeg',
      qty: 1,
    },
    {
      name: 'iPad Pro',
      description:
        '11-inch iPad Pro, Silver, 128GB, Wi-Fi only, No Engraving, USB-C Charge Cable (1 meter), 20W USB-C Power Adapter',
      category: 'ipad',
      id: 3,
      price: 799,
      identifier: 'iPad Pro 11 128GB Wi-Fi',
      img: '../../assets/img/itemsShop/ipad3.jpeg',
      qty: 1,
    },
    {
      name: 'iPad Pro',
      description:
        '11-inch iPad Pro, Space Gray, 1TB, Wi-Fi + Celular, No Engraving, USB-C Charge Cable (1 meter), 20W USB-C Power Adapter',
      category: 'ipad',
      id: 4,
      price: 1699,
      identifier: 'iPad Pro 11 1TB Wi-Fi + Celular',
      img: '../../assets/img/itemsShop/ipad4.jpeg',
      qty: 1,
    },
    {
      name: 'iPad Pro',
      description:
        '12.9-inch iPad Pro, Silver, 128GB, Wi-Fi only, No Engraving, USB-C Charge Cable (1 meter), 20W USB-C Power Adapter',
      category: 'ipad',
      id: 5,
      price: 1099,
      identifier: 'iPad Pro 12.9 128GB Wi-Fi',
      img: '../../assets/img/itemsShop/ipad5.jpeg',
      qty: 1,
    },
    {
      name: 'iPad Pro',
      description:
        'Apple M2 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine, 16GB unified memory, 512GB SSD storage',
      category: 'ipad',
      id: 6,
      price: 1999,
      identifier: 'iPad Pro 12.9 1TB Wi-Fi + Celular',
      img: '../../assets/img/itemsShop/ipad6.jpeg',
      qty: 1,
    },
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
