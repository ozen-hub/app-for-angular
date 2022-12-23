import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {


  customerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    salary: new FormControl(0,Validators.required),
  })

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  findCustomer(){
    let url = "http://localhost:8000/api/v1/customer/"+this.customerForm.get('id')?.value;

    this.http.get<any>(url).subscribe(response=>{
      this.customerForm.patchValue({
        name:response.data.name,
        address:response.data.address,
        salary:response.data.salary,
      })
    })

  }


  updateCustomer() {
    let url = "http://localhost:8000/api/v1/customer/modify?id="+this.customerForm.get('id')?.value;

    let customer = {
      name: this.customerForm.get('name')?.value,
      address: this.customerForm.get('address')?.value,
      // @ts-ignore
      salary: Number.parseInt(this.customerForm.get('salary')?.value)
    }

    this.http.put(url, {
      name: customer.name,
      address: customer.address,
      salary: customer.salary,
    }).subscribe(responseData => {
      console.log(responseData);
      alert('Updated!');
      this.customerForm.reset();
    });
  }
}
