import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product[] = [
    {id:1, name: "asd", description: "ddd", price: "300"},
    {id:2, name: "bobo", description: "ssz", price: "kaka"},
    {id:3, name: "koko", description: "www", price: "lala"},
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(product => product.id === id);
  }
}
