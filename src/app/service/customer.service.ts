import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../dto/Customer";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public saveCustomer(c: any): Observable<any> {
    return this.http.post(this.baseUrl+'customer/create', {
      name: c.name,
      address: c.address,
      salary: c.salary
    });
  }

  public findCustomer(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl+'customer/'+id);
  }

  public deleteCustomer(id: string): Observable<any> {
    return this.http.delete(this.baseUrl+'customer/'+id);
  }

  public updateCustomer(c: any): Observable<any> {
    return this.http.put(this.baseUrl+'customer/modify?id='+c.id, {
      name: c.name,
      address: c.address,
      salary: c.salary,
    })
  }

  public findAll(page: number, size: number, text: string): Observable<any> {
    return this.http.get<any>(this.baseUrl+'customer/list?searchText='+text+'&page='+page+'&size='+size)
  }

}
