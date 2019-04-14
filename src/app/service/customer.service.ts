import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from "../model/customer.model";

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8088';

  getCustomers() {
    return this.http.get<Customer[]>(this.baseUrl + '/v1/customers');
  }

  getCustomerById(id: string) {
    return this.http.get<Customer>(this.baseUrl + '/v1/customer/' + id);
  }

  createCustomer(cust: Customer) {
    return this.http.post(this.baseUrl + '/v1/create/customer', cust);
  }

  updateCustomer(cust: Customer) {
    return this.http.put(this.baseUrl + '/v1/customer/' + cust.id, cust);
  }

  deleteCustomer(id: string) {
    return this.http.delete(this.baseUrl + '/v1/customer/' + id);
  }

}
