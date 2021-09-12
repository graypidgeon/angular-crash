import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { HelloWorldModule } from '../hello-world/hello-world.module';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    HelloWorldModule
  ]
})
export class ProductModule { }
