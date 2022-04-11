import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product()

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

    let id = this.route.snapshot.params['id']
    this.getByIdProduct(id)
  }

  getByIdProduct(id: number) {
    this.productService.getByIdProduct(id).subscribe((resp: Product) => {
      this.product = resp
    })
  }

}
