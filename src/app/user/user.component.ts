import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormControl, FormControlName, FormGroup,Validators } from '@angular/forms'; 
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _router: Router, private userservice: DataService) { }
  userdata!:FormGroup;
  Issubmited =false;
  ngOnInit(): void {
    this.userdata = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      age : new FormControl('',[Validators.required]),
    });
  }
  get input(): { [key: string]: AbstractControl } {
    return this.userdata.controls;
  }
  datafunctuion(){
    
   
    this.userservice.saveusers(this.userdata.value).subscribe((data)=>{
       this._router.navigateByUrl('/table');
    },err=>{
      console.log(err)
    })
  
  }

}
