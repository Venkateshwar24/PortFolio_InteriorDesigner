import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-personalprojects',
  templateUrl: './personalprojects.component.html',
  styleUrls: ['./personalprojects.component.css']
})
export class PersonalprojectsComponent implements OnInit {
projectData=[];
  constructor(private profileService:ProfileService) { }

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(){
    this.profileService.getProjects().subscribe(res=>
      this.projectData = res
    ,
    err => {
      console.log(err);
    });
  }
}
