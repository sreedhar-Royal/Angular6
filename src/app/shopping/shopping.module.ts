import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { SharedModule } from '../shared/shared.module';


import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { OrderViewComponent } from './components/order-view/order-view.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';

import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShopingCartComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
    { path: 'cart', component: ShopingCartComponent },
    { path: 'Products', component: ProductsComponent },
    { path: 'myorders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
    { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuardService] },
    { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
    { path: 'order-details/:id', component: OrderViewComponent, canActivate: [AuthGuardService] }
  ])
  ],
  declarations: [
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ShopingCartComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderViewComponent
  ]
})
export class ShoppingModule { }
