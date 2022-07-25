import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CarousalComponent } from './carousal/carousal.component';
import { ExperienceComponent } from './experience/experience.component';
import { PersonalprojectsComponent } from './personalprojects/personalprojects.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

import { NgwWowModule } from 'ngx-wow';



@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    CarousalComponent,
    ExperienceComponent,
    PersonalprojectsComponent,
    ContactComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxSpinnerModule,
    NgwWowModule
    
  ]
})
export class ProfileModule { }
