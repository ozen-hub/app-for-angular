import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

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

}
