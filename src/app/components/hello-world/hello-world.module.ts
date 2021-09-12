import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HelloWorldComponent } from "./hello-world";
import { HelloWorldBindingsComponent } from "./hello-world-bindings";

@NgModule({
    declarations: [
        HelloWorldComponent,
        HelloWorldBindingsComponent
    ],
    exports: [
        HelloWorldComponent
    ],
    imports: [
        CommonModule
    ]
  })
  export class HelloWorldModule { }