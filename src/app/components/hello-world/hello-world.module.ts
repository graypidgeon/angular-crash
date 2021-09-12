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
    ]
  })
  export class HelloWorldModule { }