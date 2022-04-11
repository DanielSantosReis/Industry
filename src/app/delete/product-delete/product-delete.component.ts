import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = new Product()
  idProduct: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    this.idProduct = this.route.snapshot.params['id']
    this.findByIdProduct(this.idProduct)
  }

  findByIdProduct(id: number){
    this.productService.getByIdProduct(id).subscribe((resp: Product) => {
      this.product = resp
    })
  }


  delete(){
    this.productService.deleteProduct(this.idProduct).subscribe(()=>{
      alert('Product successfully deleted')
      this.router.navigate(['/product'])
    })
  }


}
