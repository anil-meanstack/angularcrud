import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  data!: FormGroup;

  constructor(private _router: Router, private userservice: DataService) { }

  ngOnInit(): void {
    
    this.data = new FormGroup({
       name: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.minLength(8)])
    });
  }
  get input(): { [key: string]: AbstractControl } {
    return this.data.controls;

  }
  datafunctuion() {
    console.log(this.data.value);
    this.userservice.register(this.data.value).subscribe(data => {
     console.log(data)
    })

    // if (this.data.value) {
    //   this._router.navigateByUrl('/dashboad');
    // }
  }
  // onclick() {
  //   const msgService = this.userservice.massgealert()
  //   console.log(msgService)

  // }
}

