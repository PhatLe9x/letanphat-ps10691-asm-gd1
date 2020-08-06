import { Component, OnInit } from '@angular/core';
import {Product} from '../classes/product';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public items: Product[] = [];
  public laptopGamings: Product[] = [];
  public laptopNews: Product[] = [];

  constructor(private productsServices: ProductsService) {
    this.items = productsServices.getProducts().slice(0,5);
    this.laptopGamings = productsServices.getProducts().slice(5,10);
    this.laptopNews = productsServices.getProducts().slice(2,7);
    // this.cartService
    //   .getItems()
    //   .subscribe((items: Product[]) => {
    //   // remove items that are in our cart
    //     const allItems = this.items;
    //     this.items = allItems.filter(_ => {
    //       return !this.itemIsInCart(_, items);
    //     });
    //   });
  }

  ngOnInit(): void {
  }

}
