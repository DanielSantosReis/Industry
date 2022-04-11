import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Feedstock } from '../model/feedstock';
import { Product } from '../model/product';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { FeedstockService } from '../service/feedstock.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product()
  listProduct: Product[]
  nameProduct: string

  feedstock: Feedstock = new Feedstock()
  listFeedstock: Feedstock[]
  idFeedstock: number

  users: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private productService: ProductService,
    private feedstockService: FeedstockService,
    public authService: AuthService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

  this.productService.refreshToken()
    this.getAllProduct()
    this.getAllFeedstock()
  }

    getAllProduct() {
    this.productService.getAllProduct().subscribe((resp: Product[]) => {
      this.listProduct = resp
      console.log(this.listProduct)
    })
  }

  getAllFeedstock() {
    this.feedstockService.getAllFeedstock().subscribe((resp: Feedstock[]) => {
      this.listFeedstock = resp
    })
  }

  findByIdFeedstock() {
    this.feedstockService.getByIdFeedstock(this.idFeedstock).subscribe((resp: Feedstock) => {
      this.feedstock = resp
    })
  }

  publicar() {
    this.feedstock.id = this.idFeedstock
    this.product.feedstock = this.feedstock

    this.users.id = this.idUser
    this.product.user = this.users

    this.productService.postProduct(this.product).subscribe((resp: Product) => {
      this.product = resp
      alert('Post successful')
      this.product = new Product()
      this.getAllProduct()
    })
  }

  findByNameProduct() {

    if(this.nameProduct == '') {
      this.getAllProduct()
    } else {
      this.productService.getByNameProduct(this.nameProduct). subscribe((resp: Product[]) => {
        this.listProduct = resp
      })
    }
  }

}
