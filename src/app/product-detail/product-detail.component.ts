import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

import {ProductsService} from '../services/products.service';
import {Product} from '../classes/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product = {};

  constructor(private route: ActivatedRoute
    , private router: Router
    , private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.product = this.productsService.getProduct(id);
      // console.log(this.product);
    });
  }

}
