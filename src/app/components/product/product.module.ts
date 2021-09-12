import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { HelloWorldModule } from '../hello-world/hello-world.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    HelloWorldModule,
    RouterModule
  ]
  //todo da sie tu routowac jakos relatywnie?
})
export class ProductModule { }
