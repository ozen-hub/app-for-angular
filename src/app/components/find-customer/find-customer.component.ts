import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrls: ['./find-customer.component.scss']
})
export class FindCustomerComponent implements OnInit {

  customerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl(''),
    address: new FormControl(''),
    salary: new FormControl(0),
  })

  constructor() { }

  ngOnInit(): void {
  }

  findCustomer(){
    //
  }

}
