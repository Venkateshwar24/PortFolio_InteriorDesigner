import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { UploadViewComponent } from './profile/upload-view/upload-view.component';

const routes: Routes = [
  {
    path : '',
    component : ProfileComponent
  },
  {
    path : 'upload/admin',
    component : UploadViewComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
