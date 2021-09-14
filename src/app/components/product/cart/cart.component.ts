import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Oto formularz\n' +
      this.checkoutForm.value.name + '\n' +
      this.checkoutForm.value.address);
  }
}
