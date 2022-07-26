import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
loader =  true;
  constructor(private wowService : NgwWowService) { 
    wowService.init();
  }

  ngOnInit(): void {
    
     setTimeout(() =>{
      this.loader = false;
     }, 3000);
  }

}
