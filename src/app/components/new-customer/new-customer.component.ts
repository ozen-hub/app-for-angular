import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor() { }

  customerForm= new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    salary: new FormControl(0,Validators.required),
  })


  ngOnInit(): void {
  }

  saveCustomer() {

  }
}
