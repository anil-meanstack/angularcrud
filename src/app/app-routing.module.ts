import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { RegisteredComponent } from './registered/registered.component'
import { LoginComponent } from './login/login.component'
import { DashboadComponent } from './dashboad/dashboad.component';
import { AbcComponent } from './abc/abc.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from './auth.service';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: "", component: LoginComponent, },
  { path: "register", component: RegisteredComponent },
  { path: "dashboad", component: DashboadComponent,  },
  { path: "abc", component: AbcComponent, canActivate: [AuthService] },
  { path: "nevbar", component: NevbarComponent,  },
  { path: "profile", component: ProfileComponent,  },
  { path: "table" , component:TableComponent },
  { path: "user" , component:UserComponent},
  { path: "form/:id" , component:FormComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
