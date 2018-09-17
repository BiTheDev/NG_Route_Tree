import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductbrandComponent } from './productbrand/productbrand.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ReviewdetailComponent } from './reviewdetail/reviewdetail.component';
import { ReviewauthorComponent } from './reviewauthor/reviewauthor.component';
import { ReviewallComponent } from './reviewall/reviewall.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    ProductdetailComponent,
    ProductbrandComponent,
    ProductcategoryComponent,
    ReviewdetailComponent,
    ReviewauthorComponent,
    ReviewallComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
