import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { AdminComponent } from "./admin/admin.component";
import { FrontendComponent } from "./frontend/frontend.component";
import { ProductCartComponent } from "./product-cart/product-cart.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "cart", component: ProductCartComponent},
    {path: "contact", component: ContactComponent},
  {
    path: "home", component: FrontendComponent,
    children: [
      { path: "", redirectTo: "product", pathMatch: "full"},
      { path: "product", component: ProductListComponent },
      { path: "product-detail/:productID", component: ProductDetailComponent }
    ]
  },

  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "", redirectTo: "manager", pathMatch: "full" },
      { path: "manager", component: ProductManagerComponent },
      { path: "product-add", component: ProductAddComponent },
      { path: "product-edit/:productID", component: ProductEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
