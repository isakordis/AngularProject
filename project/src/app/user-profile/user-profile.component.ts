import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'app/services/fetch-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  name:string='';
  surname:string='';
  id:Number;
  age:Number;
  constructor( public myCustomService:FetchDataService) { }

  ngOnInit() {
    
  }

}
