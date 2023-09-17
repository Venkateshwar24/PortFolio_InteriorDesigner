import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
companies=[];
  constructor(private profileService : ProfileService) { }

  ngOnInit(): void {
    this.fetchCompanies();
  }

  fetchCompanies(){
    this.profileService.getCompanies().subscribe(res=>{
      this.companies = res
      this.companies = this.companies.reverse()
    },
    err => {
      console.log(err);
    });
  }
}
