import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { FeedstockComponent } from './feedstock/feedstock.component';
import { HomeComponent } from './home/home.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDeleteComponent } from './delete/product-delete/product-delete.component';
import { FeedstockDeleteComponent } from './delete/feedstock-delete/feedstock-delete.component';
import { FeedstockEditComponent } from './edit/feedstock-edit/feedstock-edit.component';
import { ProductEditComponent } from './edit/product-edit/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ProductComponent,
    FeedstockComponent,
    HomeComponent,
    RegisterProductComponent,
    ProductDetailComponent,
    ProductDeleteComponent,
    FeedstockDeleteComponent,
    FeedstockEditComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
