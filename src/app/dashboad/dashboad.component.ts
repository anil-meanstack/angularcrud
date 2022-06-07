import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {
  users:any;
  constructor(private service : DataService) { }

  ngOnInit(): void {
    this.service.get().subscribe((data=>{
      this.users = data;
    }))
  }

}
