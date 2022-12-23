import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  customerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    salary: new FormControl(0, Validators.required),
  })


  ngOnInit(): void {

  }

  saveCustomer() {
    let customer = {
      id: '',
      name: this.customerForm.get('name')?.value,
      address: this.customerForm.get('address')?.value,
      // @ts-ignore
      salary: Number.parseInt(this.customerForm.get('salary')?.value)
    }

    let url = "http://localhost:8000/api/v1/customer/create"

    this.http.post(url, {
      name: customer.name,
      address: customer.address,
      salary: customer.salary,
    }).subscribe(responseData => {
      console.log(responseData);
      alert('Saved!');
      this.customerForm.reset();
    });
  }
}
