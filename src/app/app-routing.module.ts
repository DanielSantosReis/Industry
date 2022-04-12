import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FeedstockDeleteComponent } from './delete/feedstock-delete/feedstock-delete.component';
import { ProductDeleteComponent } from './delete/product-delete/product-delete.component';
import { ProductEditComponent } from './edit/product-edit/product-edit.component';
import { FeedstockComponent } from './feedstock/feedstock.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { FeedstockEditComponent } from './edit/feedstock-edit/feedstock-edit.component';


const routes: Routes = [
{ path:'', redirectTo:'home', pathMatch:'full'},
{ path:'home', component: HomeComponent },
{ path:'about', component: AboutComponent },
{ path:'login', component: LoginComponent},
{ path:'register', component: RegisterComponent},

{ path:'product', component: ProductComponent},
{ path:'feedstock', component: FeedstockComponent},
{ path:'register-product', component: RegisterProductComponent},
{ path:'product-detail/:id', component: ProductDetailComponent},
{ path:'product-delete/:id', component: ProductDeleteComponent},
{ path:'product-edit/:id', component: ProductEditComponent},
{ path:'feedstock-delete/:id', component: FeedstockDeleteComponent},
{ path:'feedstock-edit/:id', component: FeedstockEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
