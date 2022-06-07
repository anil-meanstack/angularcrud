import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  data!: FormGroup;
  Issubmited =false;
  userObj:any;
  constructor(private _router: Router, private userservice: DataService) { }

  ngOnInit(): void {
    this.userservice.get().subscribe((users) => {
      //console.log(users)
    })


    this.data = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.minLength(8)])
    });
    
  }
  get input(): { [key: string]: AbstractControl } {
    return this.data.controls;

  }
  datafunctuion() { 

    this.Issubmited=true
    if (this.data.valid) {
      this.userservice.login(this.data.value).subscribe((data)=>{
        this.userObj = data;

        if(this.userObj.is_login){
          localStorage.setItem('vex',JSON.stringify(this.userObj))
          this._router.navigateByUrl('/nevbar');
        }
      },
      err=>
      {
        console.log("err--<",err)
      })
    }
  }
  // onclick(){
  //   const msgService = this.userservice.massgealert()
  //    console.log(msgService)

  // }
}