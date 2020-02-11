import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: IProduct[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.productService.loadProduct('toy0011')
      .subscribe(
        product => this.products = [product],
        err => console.log(err.error.message)
        );
  }

}
