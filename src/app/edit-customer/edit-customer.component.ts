import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  cust: Customer;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    let custId = localStorage.getItem("editCustomerId");
    if(!custId) {
      alert("Invalid action.")
      this.router.navigate(['list-customer']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      title: ['', Validators.required],
      address: ['', Validators.required],
      landmark: ['', Validators.required]
    });
    this.customerService.getCustomerById(custId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.customerService.updateCustomer(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-customer']);
        },
        error => {
          alert(error);
        });
  }

}
