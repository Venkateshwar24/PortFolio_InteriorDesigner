import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    wowService.init();
   }

  ngOnInit(): void {
  }

}
