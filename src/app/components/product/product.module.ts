import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { HelloWorldModule } from '../hello-world/hello-world.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    HelloWorldModule,
    ReactiveFormsModule,
    RouterModule
  ]
  //todo da sie tu routowac jakos relatywnie?
})
export class ProductModule { }
