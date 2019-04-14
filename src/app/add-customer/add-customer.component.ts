import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private customerService: CustomerService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      title: ['', Validators.required],
      address: ['', Validators.required],
      landmark: ['', Validators.required]
    });

  }

  onSubmit() {
    this.customerService.createCustomer(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-customer']);
      });
  }

}
