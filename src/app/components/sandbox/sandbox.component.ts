import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  submitMessage = "wsio ok";

  constructor() { }

  ngOnInit(): void {
  }

  printMessage(text: string) {
    alert(text);
  }

  onSubmit(form: NgForm) {
    console.log(form.controls["name"].value);
  }
}
