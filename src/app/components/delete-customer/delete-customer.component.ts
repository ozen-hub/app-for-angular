import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {


  customerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    salary: new FormControl(0,Validators.required),
  })

  constructor(private service: CustomerService) {
  }

  ngOnInit(): void {
  }

  findCustomer(){
    this.service.findCustomer(this.customerForm.get('id')?.value!).subscribe(response=>{
      this.customerForm.patchValue({
        name:response.data.name,
        address:response.data.address,
        salary:response.data.salary,
      })
    })
  }

  deleteCustomer() {
   this.service.deleteCustomer(this.customerForm.get('id')?.value!).subscribe(responseData => {
      console.log(responseData);
      alert('Deleted!');
      this.customerForm.reset();
    });
  }
}
