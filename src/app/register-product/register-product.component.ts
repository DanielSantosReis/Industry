import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Feedstock } from '../model/feedstock';
import { Product } from '../model/product';
import { User } from '../model/user';
import { FeedstockService } from '../service/feedstock.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  product: Product = new Product()
  listProduct: Product[]

  users: User = new User()
  idUser = environment.id

  feedstock: Feedstock = new Feedstock()
  idFeedstock: number
  listFeedstock: Feedstock[]

  constructor(
    private router: Router,
    private productService: ProductService,
    private feedstockService: FeedstockService,

  ) { }

  ngOnInit() {
    window.scroll(0,0);

    this.productService.refreshToken()
    this.findAllProduct()
    this.findAllFeedstock()
  }

  


findAllProduct(){
  this.productService.getAllProduct().subscribe((resp: Product[]) => {
    this.listProduct = resp
  })
}

findByIdFeedstock() {
  this.feedstockService.getByIdFeedstock(this.idFeedstock).subscribe((resp: Feedstock) => {
    this.feedstock = resp
  })
}

findAllFeedstock() {
  this.feedstockService.getAllFeedstock().subscribe((resp: Feedstock[]) => {
    this.listFeedstock = resp
  })
}

register() {
  this.feedstock.id = this.idFeedstock
  this.product.feedstock = this.feedstock
  this.users.id = this.idUser
  this.product.user = this.users
  this.productService.postProduct(this.product).subscribe((resp: Product) => {this.product = resp
    alert('Product registered successfully')
  this.findAllProduct()
  this.product = new Product()
  })
}


}
