import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  PROPERTY_OF_CLASS:any;
 
  constructor(private _router: Router, private userservice: DataService) {  }


  ngOnInit(): void {

    this.userservice.get().subscribe((data_from_server) => {
      this.PROPERTY_OF_CLASS = data_from_server
    })
      
    
  }
  deleteUser(id:string){
    console.log(id)
    this.userservice.userdelete(id).subscribe((data)=>{
     
     }) 
  }
  rdToClick(){
    this._router.navigateByUrl('/user')
  }
   update(id:string){
      this._router.navigateByUrl('/form/'+id)   
    }

}

