import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisteredComponent } from './registered/registered.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AbcComponent } from './abc/abc.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component'
import { DashboadComponent } from './dashboad/dashboad.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisteredComponent,
    LoginComponent,
    DashboadComponent,
    AbcComponent,
    NevbarComponent,
    ProfileComponent,
    TableComponent,
    UserComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
