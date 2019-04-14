import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Customer} from "../model/customer.model";
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private router: Router, private customerservice: CustomerService) { }

  ngOnInit() {
    this.customerservice.getCustomers()
      .subscribe( data => {
        this.customers = data;
      });
  }

  deleteCustomer(cust: Customer): void {
    this.customerservice.deleteCustomer(cust.id)
      .subscribe( data => {
        this.customers = this.customers.filter(u => u !== cust);
      })
  };

  editCustomer(cust: Customer): void {
    localStorage.removeItem("editCustomerId");
    localStorage.setItem("editCustomerId", cust.id.toString());
    this.router.navigate(['edit-customer']);
  };

  addCustomer(): void {
    this.router.navigate(['add-customer']);
  };
}
