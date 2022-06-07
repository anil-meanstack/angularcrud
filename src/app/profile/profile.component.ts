import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
   
  userdata!:FormGroup;
  userInfo:any;
  userdbinfo:any;
  show=false;
  
  constructor(private _router: Router, private userservice: DataService) { }
 
  ngOnInit(): void {

    this.userInfo = JSON.parse(localStorage.getItem('vex') || '{}' )

    this.userservice.getUserinfo(this.userInfo.data._id).subscribe((users) => {
        this.userdbinfo = users;
        this.userdata.patchValue({
          name: this.userdbinfo.userData.name
        });
    });
    
    this.userdata = new FormGroup({
       name: new FormControl("", [Validators.required]),
    });
  
  }
  get input(): { [key: string]: AbstractControl } {
    return this.userdata.controls;
  }
  
  updateUser(){
   
    // console.log(this.userdata.value);
    this.userservice.update(this.userInfo.data._id,this.userdata.value).subscribe(data=>{
     this.show=true
    },err=>{
      
    });
  }
  



}
