import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductsDBComponent} from "./pages/products/products.db.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {StudentsDBComponent} from "./pages/students/students.db.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component:  HomeComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'productsdb', component: ProductsDBComponent },
  { path: 'product/detail/:id', component: ProductDetailComponent },
  { path: 'studentdb', component: StudentsDBComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
