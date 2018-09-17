import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductbrandComponent } from './productbrand/productbrand.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ReviewdetailComponent } from './reviewdetail/reviewdetail.component';
import { ReviewauthorComponent } from './reviewauthor/reviewauthor.component';
import { ReviewallComponent } from './reviewall/reviewall.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path : 'product', component : ProductsComponent, children :[
    {path : 'details/:id', component : ProductdetailComponent},
    {path : 'brand/:brand', component : ProductbrandComponent},
    {path: 'category/:cat',component : ProductcategoryComponent}
  ]},
  {path: 'reviews', component : ReviewsComponent, children : [
    {path: 'details/:id', component : ReviewdetailComponent},
    {path : 'author/:id', component : ReviewauthorComponent},
    {path : 'all/:id', component : ReviewallComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
