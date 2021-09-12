import { Component } from '@angular/core';
 
@Component ({
  selector: 'hello-world-bindings',
  templateUrl: './hello-world-bindings.html'
})
export class HelloWorldBindingsComponent {
  fontColor = 'red';
  sayHelloId = 1;
  canClick = false;
  message = 'Hello, World';
 
  sayMessage() {
    alert(this.message);
  }
 
}