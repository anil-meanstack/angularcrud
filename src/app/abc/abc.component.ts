import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {
   users:any;
   data:any;
  constructor( private service:DataService) { }

  ngOnInit(): void {
     this.service.get().subscribe((data=>{
      this.users=data;
    }))

   
  this.data = this.service.abc()

  }

}
