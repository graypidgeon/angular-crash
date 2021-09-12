import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
    <hello-world-bindings></hello-world-bindings>
  `
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}