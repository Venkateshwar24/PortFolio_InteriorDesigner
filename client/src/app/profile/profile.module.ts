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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgwWowModule } from 'ngx-wow';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { UploadViewComponent } from './upload-view/upload-view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


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
    ResumeComponent,
    FooterComponent,
    LoaderComponent,
    UploadViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
    
  ]
})
export class ProfileModule { }
