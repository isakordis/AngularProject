import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FetchDataService } from 'app/services/fetch-data.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  arr:[];
  constructor(  public myCustomService:FetchDataService) { }

  ngOnInit() {
  
    this.myCustomService.getJSON().subscribe((response:any)=>{
      console.log(response);
      this.arr = response;
    })
  }
 




}
