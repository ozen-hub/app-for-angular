import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import * as http from "http";
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  searchText = "";
  page: number | undefined = 0;
  size: number | undefined = 5;
  paginateOption: number[] = [5, 10, 15, 20, 50, 100];
  dataCount: number = 0;
  dataArray: any[] = [];
  // @ts-ignore
  pageEvent: PageEvent;

  constructor(private service: CustomerService) {
  }

  ngOnInit(): void { // lifecycle hooks => initialize(java FX)
    this.getData(this.searchText, this.page!, this.size!);
  }

  serverDataManager(event?: PageEvent): any {
    this.page = event?.pageIndex;
    this.size = event?.pageSize;
    this.getData(this.searchText, this.page!, this.size!);
  }

  search(text:string){
    this.searchText=text;
    this.getData(this.searchText, this.page!, this.size!);
  }

  getData(text: string, page: number, size: number) {
    this.service.findAll(page,size,text).subscribe(response => {
      this.dataArray = response.data.dataList;
      this.dataCount = response.data.dataCount;
    })
  }

}
