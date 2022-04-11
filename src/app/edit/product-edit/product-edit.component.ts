import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedstock } from 'src/app/model/feedstock';
import { Product } from 'src/app/model/product';
import { FeedstockService } from 'src/app/service/feedstock.service';
import { ProductService } from 'src/app/service/product.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product()
  feedstock: Feedstock = new Feedstock()
  listFeedstock: Feedstock[]
  idFeedstock: number


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private feedstockService: FeedstockService

  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == '') {
      this.router.navigate(['/product'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdProduct(id)
    this.findAllFeedstock()
  }

  findByIdProduct(id: number) {
    this.productService.getByIdProduct(id).subscribe((resp: Product) => {
      this.product = resp
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

  update() {
    this.feedstock.id = this.idFeedstock
    this.product.feedstock = this.feedstock

    this.productService.putProduct(this.product).subscribe((resp: Product) => {
      this.product = resp
      alert('Product successfully updated')
      this.router.navigate(['/product'])
    })
  }
}