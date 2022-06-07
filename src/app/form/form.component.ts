import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormControl, FormControlName, FormGroup,Validators } from '@angular/forms'; 
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _router: Router, private userservice: DataService ,private router:ActivatedRoute) {

    
   }
   
   userdata!:FormGroup;
   data:any;
   user_id:string = this.router.snapshot.url[1].path;
   show=false;
  ngOnInit(): void {
    this.userdata = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      age : new FormControl('',[Validators.required]),
    });
    this.getUser();
  }
  getUser(){

    this.userservice.getcurrentdata(this.user_id).subscribe((result)=>{
      this.data = result;
      this.userdata.patchValue({
        name: this.data.userData.name,
        email: this.data.userData.email,
        address: this.data.userData.address,
        country : this.data.userData.country,
        age: this.data.userData.age
      });
    })
  }
  
  get input(): { [key: string]: AbstractControl } {
    return this.userdata.controls;
  }

  updateuser(){
    this.userservice.updateuserdata(this.user_id,this.userdata.value).subscribe(data=>{
        this.show=true 
        this._router.navigateByUrl('/table');
     },err=>{
       
     });
     console.log(this.userdata)
  }


}
