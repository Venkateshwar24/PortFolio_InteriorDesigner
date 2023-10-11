import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRouter } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { UploadViewComponent } from './profile/upload-view/upload-view.component';
import { authGuard } from './auth.guard';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path : '',
    component : ProfileComponent
  },
  {
    path : 'upload/admin',
    component : UploadViewComponent,
    canActivate : [authGuard]
  }
];
/**bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});**/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
