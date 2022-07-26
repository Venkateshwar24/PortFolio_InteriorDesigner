import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
@Input() projects=[];
  constructor() { }

  ngOnInit(): void {

  }



  


  checkXtension(filepath){
    var period = filepath.lastIndexOf('.');
    var fileExtension = filepath.substring(period + 1);
    if((fileExtension === "jpg") || (fileExtension == "png") || (fileExtension == "jpeg")){
      return true;
    }
    return false;
    
  }
}
