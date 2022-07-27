import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-upload-view',
  templateUrl: './upload-view.component.html',
  styleUrls: ['./upload-view.component.css']
})
export class UploadViewComponent implements OnInit {
  newProjectData: FormGroup;
  newExperienceData :FormGroup;
  rendersUploaded=[];
  ListofExperiences = [];
  newExpProjectData : FormGroup;
  constructor(private fb : FormBuilder,
              private profileService : ProfileService,
              private _route : Router) {

    this.newProjectData = this.fb.group({
      project_name: [''],
      project_type: [''],
      project_description: [''],
      project_files:[''],
    });

    this.newExperienceData = this.fb.group({
      company_name : [''],
      company_designation : [''],
      company_description : ['']
    });
    


   }

  ngOnInit(): void {
  }

  onFileChange(event:any) {
    
    if(event.target.files && event.target.files[0])
    {
        const files: FileList = event.target.files;
        for(let i=0; i<files.length; i++)
        {
          this.rendersUploaded.push(files[i]);
        }
    }
  }



  onProjectSubmit() {
    const formData = new FormData();
     formData.append('project_name', this.newProjectData.get('project_name').value);
     formData.append('project_type', this.newProjectData.get('project_type').value);
     formData.append('project_description', this.newProjectData.get('project_description').value);

     for(let i=0; i<this.rendersUploaded.length; i++)
     {
       formData.append('project_files[]', this.rendersUploaded[i]);
     }
     

 
     this.profileService.postProjects(formData)
       .subscribe(
         res =>{console.log(res);
           this._route.navigate(['/']);
         } ,
         err => console.log(err)
       )
      
   }

   onExperienceSubmit(){
    this.profileService.postExperience(this.newExperienceData.value).subscribe(
      res => {
              console.log(res);
              alert("Experience upload successful");
              this._route.navigate(['/']);
            },
            err => console.log(err))
   }



   fetchExperiences(){
    this.profileService.getCompanies().subscribe(res=> {this.ListofExperiences = res;} , err => console.log(err));
   }


   onAddProjectSubmit(exp_id){
    const formData = new FormData();
    formData.append('project_name', this.newProjectData.get('project_name').value);
    formData.append('project_type', this.newProjectData.get('project_type').value);
    formData.append('project_description', this.newProjectData.get('project_description').value);

    for(let i=0; i<this.rendersUploaded.length; i++)
    {
      formData.append('project_files[]', this.rendersUploaded[i]);
    }
    


    this.profileService.patchExpProjects(formData,exp_id)
      .subscribe(
        res =>{console.log(res);
          this._route.navigate(['/']);
        } ,
        err => console.log(err)
      )
   }
}
