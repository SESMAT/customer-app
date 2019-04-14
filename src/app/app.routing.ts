import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'list-customer', component: ListCustomerComponent },
  { path: 'edit-customer', component: EditCustomerComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
